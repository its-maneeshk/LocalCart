import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils/toastMessages';

const Signup = () => {
    const navigate = useNavigate();
    const [signupInfo, setSignupInfo] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }
    // console.log('Signup Info -> ', signupInfo);
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, username, email, password } = signupInfo;
        if (!name || !username || !email || !password) {
            return handleError('All fields are required');
        }
        try {
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { message, success , error} = result;
            if(success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
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
                <h1 className="text-white text-2xl mb-4">Signup</h1>
                <form onSubmit={handleSignup}>
                    <label htmlFor="name" className="block text-white mb-1">Full Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        //required
                        autoFocus
                        placeholder="Manish Kumar Patel"
                        className="w-full p-2 mb-4 rounded"
                        value={signupInfo.name}
                    />

                    <label htmlFor="username" className="block text-white mb-1">Username</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="username"
                        id="username"
                        //required
                        placeholder="example123 or __example"
                        className="w-full p-2 mb-4 rounded"
                        value={signupInfo.username}
                    />

                    <label htmlFor="email" className="block text-white mb-1">Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        //required
                        placeholder='exmple@gmail.com'
                        className="w-full p-2 mb-4 rounded"
                        value={signupInfo.email}
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
                        value={signupInfo.password}
                    />

                    <button
                        type="submit"
                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100"
                    >
                        Signup
                    </button>
                    <span className='ml-5'>Already have an account ? <Link to="/login" className='text-white'>Login</Link></span>
                </form>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Signup