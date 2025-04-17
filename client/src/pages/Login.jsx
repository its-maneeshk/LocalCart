import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils/toastMessages';

const Login = () => {
    const navigate = useNavigate();
    const [loginInfo, setloginInfo] = useState(
        {
            email: '',
            password: ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyloginInfo = { ...loginInfo };
        copyloginInfo[name] = value;
        setloginInfo(copyloginInfo);
    }
    // console.log('login Info -> ', loginInfo);
    const handlelogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('All fields are required');
        }
        try {
            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { message, success, jwtToken, name, error} = result;
            if(success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000);
            }
            else if(error) {
                const detail = error?.details[0].message;
                handleError(detail);
            }
            else if(!success) {
                handleError(message);
            }
            console.log(result)
        }
        catch (err) {
            handleError(err);
        }
    }
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            <div className="bg-blue-400 p-6 flex flex-col shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <h1 className="text-white text-2xl mb-4">login</h1>
                <form onSubmit={handlelogin}>
                    <label htmlFor="email" className="block text-white mb-1">Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        //required
                        placeholder='exmple@gmail.com'
                        className="w-full p-2 mb-4 rounded"
                        value={loginInfo.email}
                    />

                    <label htmlFor="password" className="block text-white mb-1">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        //required
                        placeholder='**************'
                        className="w-full p-2 mb-4 rounded"
                        value={loginInfo.password}
                    />

                    <button
                        type="submit"
                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100"
                    >
                        login
                    </button>
                    <span className='ml-5'>Don't have an account ? <Link to="/signup" className='text-white'>Signup</Link></span>
                </form>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Login