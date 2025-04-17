import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='bg-gray-900 text-gray-300 text-center p-4'>
      <div className="container mx-auto">
        <div className="mt-2 space-x-4">
          <Link to="/home" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar