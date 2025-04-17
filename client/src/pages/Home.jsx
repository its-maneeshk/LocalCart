import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../utils/toastMessages';
import { ToastContainer } from 'react-toastify';

function Home() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    // setIsAuthenticated(false);
    handleSuccess('User loggedout sucessfully.');
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";
      const headers = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    }
    catch (error) {
      handleError(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <section>
<div>
  <h1>I am the Home Page</h1>
  <h2>Welcome, {loggedInUser}</h2>

  <button onClick={handleLogout}>Logout</button>

  <div style={{ marginTop: '20px' }}>
    <h3>Product List:</h3>
    <ul>
      {products.length > 0 ? (
        products.map((item) => (
          <li key={item._id || item.id}> {/* Prefer unique ID if available */}
            <span>{item.name} : ₹{item.price}</span>
          </li>
        ))
      ) : (
        <li>No products available.</li>
      )}
    </ul>
  </div>
</div>

      <ToastContainer />
    </section>
  )
}

export default Home