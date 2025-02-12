import React from 'react'

const Hero = () => {
    return (
        <div className='md:flex h-screen md:w-full '>
            <div className="h-1/2 md:h-screen w-full justify-center items-center  px-6 ">
                <h1 className='text-4xl font-extrabold text-[#1f6462] md:pt-38 pb-4 pt-10'>Hello World</h1>
                <h2 className='text-2xl font-bold text-[#637a82] pb-8'>Web Developer || UI/UX Designer</h2>
                <p className='text-sm text-[#808e83] pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae ipsum obcaecati in vitae, quidem voluptatibus aliquam similique alias ad non aut eaque, et corporis libero qui perferendis a corrupti.</p>
                <button className='text-white bg-[#1f6462] border-none py-3 px-7 rounded-sm'>Resume</button>
            </div>
            <div className="h-1/2 md:h-screen w-full">
                <img className='flex mx-auto h-80 w-80 md:h-screen md:w-full' src="src\assets\photo.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero