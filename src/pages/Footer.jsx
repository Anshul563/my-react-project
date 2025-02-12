import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-auto md:h-40 bg-[#50e9da] p-4'>
            <div className="flex flex-col items-center md:w-1/3 space-y-1 mb-4 md:mb-0">
                <h3 className='text-xl font-semibold text-[#2a454e]'>Menu</h3>
                <a className='text-sm text-[#2a454e] hover:text-gray-200' href="">Home</a>
                <a className='text-sm text-[#2a454e] hover:text-gray-200' href="">About</a>
                <a className='text-sm text-[#2a454e] hover:text-gray-200' href="">Projects</a>
                <a className='text-sm text-[#2a454e] hover:text-gray-200' href="">Contact</a>
            </div>
            <div className='flex flex-col items-center md:w-1/3 mb-4 md:mb-0'>
                <h3 className='text-[#2a454e] mt-2 font-semibold text-center text-xl'>Your Name</h3>
                <p className='text-[#416774] text-center text-[10px] md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius deleniti.</p>
                <div className="mt-4 md:mt-8 flex justify-center">
                    <SocialMediaIcons />
                </div>
                <p className='text-center text-xs mt-3'>&copy; 2025 | All rights reserved</p>
            </div>
            <div className='flex flex-col items-center md:w-1/3'>
                <h3 className='text-xl text-center mt-4 font-semibold text-[#2a454e]'>Get in touch</h3>
                <p className='text-xs md:text-sm text-center text-[#416774]'>123 Your Address, Your City</p>
                <p className='text-xs md:text-sm text-center text-[#416774]'>yourname123@gmail.com</p>
                <p className='text-xs md:text-sm text-center text-[#416774]'>+91 12312 32123</p>
            </div>
        </div>
    )
}

export default Footer