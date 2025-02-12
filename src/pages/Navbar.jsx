import React from 'react'
import { Link } from "react-router-dom"; // Import react-router-dom components
import Contact from './Contact';


const Navbar = () => {
    return (
        <div className='flex py-3 justify-evenly h-12 w-full bg-[#2a454e]'>
            <h2 className='text-[#acf2ea] md:items-center taxt-md font-bold'>Your Name</h2>
            <div className="justify-center items-center sm:flex hidden">

                <ul className="flex space-x-4">
                    <li><Link to="/" className='mx-6 text-[#acf2ea] uppercase text-xs transition-all hover:text-gray-300'>Home</Link></li>
                    <li><Link to="/about" className='mx-6 text-[#acf2ea] uppercase text-xs transition-all hover:text-gray-300'>About</Link></li>
                    <li><Link to="/projects" className='mx-6 text-[#acf2ea] uppercase text-xs transition-all hover:text-gray-300'>Projects</Link></li>
                    <li><Link to="/contact" className='mx-6 text-[#acf2ea] uppercase text-xs transition-all hover:text-gray-300'>Contact</Link></li>
                </ul>


            </div>
            <div className="md:hidden">
                <select id="dropdown" className='text-gray-100 bg-[#2a454e] border-none'>
                    <option value="option2"><Link to="/" className="hover:text-gray-400">Home</Link></option>
                    <option value="option3"><Link to="/about" className="hover:text-gray-400">About</Link></option>
                    <option value="option2"><Link to="/projects" className="hover:text-gray-400">Projects</Link></option>
                    <option value="option3"><Link to="/contact" className="hover:text-gray-400">Contact</Link></option>
                </select>

            </div>
        </div>
    )
}

export default Navbar