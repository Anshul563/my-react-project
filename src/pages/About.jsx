import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulates a 2-second loading time
    }, []);

    return (
        <div className="">
            {/* Show loader while loading */}
            {loading ? (
                <div className="flex justify-center items-center h-screen bg-white dark:invert">
                    <span className="sr-only">Loading...</span>
                    <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce"></div>
                </div>
            ) : (
                <div className="">

                    <div className='md:flex h-screen md:w-full '>
                        <div className="h-1/2 md:h-screen w-full justify-center items-center  px-6 ">
                            <h1 className='text-center text-4xl font-extrabold text-[#1f6462] md:pt-20 pb-4 pt-10'>Your Name</h1>
                            <p className='text-sm text-[#808e83] pb-7'>A web developer designs, builds, and maintains websites using coding languages like HTML, CSS, and JavaScript. They ensure functionality, responsiveness, and user experience, working on front-end, back-end, or full-stack.</p>
                            <h2 className='text-center text-2xl font-bold text-[#1f6462] pb-8'>My Education | Certification</h2>
                            <ul class="list-disc pl-5">
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Bachelor of Computer Applications (BCA)</strong> - GLA University, Mathura (Ongoing)</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Frontend Development</strong> - Proficient in HTML, CSS, Tailwind CSS, React.js</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Graphic Design</strong> - Specialized in YouTube thumbnails, flyers, and social media posts</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Chrome Extension Development</strong> - Exploring custom browser extensions</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Certification: Web Development</strong> - Completed online courses (Udemy, Coursera, etc.)</li>
                            </ul>
                            {/* <button className='text-white bg-[#1f6462] border-none py-3 px-7 rounded-sm'>Resume</button> */}
                        </div>
                        <div className="h-1/2 md:h-screen w-full px-6 ">
                            <h2 className='text-center text-4xl font-extrabold text-[#1f6462] md:pt-20 pb-4 pt-20'>My Skills</h2>
                            <ul class="mt-6 list-disc pl-5 space-y-5 ">
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Frontend Development:</strong> HTML, CSS, Tailwind CSS, React.js</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Graphic Design:</strong> YouTube thumbnails, flyers, social media posts</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Web Development:</strong> Responsive design, UI/UX principles</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Chrome Extension Development:</strong> Creating custom browser extensions</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462]'>Version Control:</strong> Git, GitHub</li>
                                <li className='text-[#637a82]'><strong className='text-[#1f6462] mb-28'>Problem-Solving:</strong> Debugging and optimizing code</li>
                            </ul>
                        </div>

                    </div>
                    <div className="mt-17 md:mt-5 lg:mt-5"><Footer /></div>
                </div>
            )}

        </div>
    )
}

export default About