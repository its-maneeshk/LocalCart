import React from 'react'
import pageNotFound from '../assets/PageNotFound.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-[#684ca0] to-[#1c4ca0] text-white min-h-screen flex items-center">
                <div className="container mx-auto p-4 flex flex-wrap items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-5/12 text-center p-4">
                        <img src={pageNotFound} alt="Not Found" />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-7/12 text-center md:text-left p-4">
                        <div className="text-6xl font-medium">404</div>
                        <div className="text-xl md:text-3xl font-medium mb-4">
                            Oops. This page has gone missing.
                        </div>
                        <div className="text-lg mb-8">
                            You may have mistyped the address or the page may have moved.
                        </div>
                        <Link to='/' className="border border-white rounded p-4 hover:bg-white hover:text-[#1c4ca0] transition">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound