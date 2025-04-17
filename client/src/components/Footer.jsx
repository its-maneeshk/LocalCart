import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 text-center p-4 mt-8">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} MultiShop. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link to="/about" className="hover:text-white">About</Link>
                        <Link to="/contact" className="hover:text-white">Contact</Link>
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer