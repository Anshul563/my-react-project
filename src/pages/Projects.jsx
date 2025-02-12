import React, { useState, useEffect } from 'react';
import Img1 from '../assets/imgs/coding-1.jpg';
import Img2 from '../assets/imgs/coding-2.jpg';
import Img3 from '../assets/imgs/coding-3.jpg';
import Img4 from '../assets/imgs/coding-4.jpg';
import Footer from './Footer';

const ProjectsData = [
    { id: 1, img: Img1, title: 'Project 1', para: 'Lorem ipsum dolor sit amet.', btn: 'Learn more' },
    { id: 2, img: Img2, title: 'Project 2', para: 'Lorem ipsum dolor sit amet.', btn: 'Learn more' },
    { id: 3, img: Img3, title: 'Project 3', para: 'Lorem ipsum dolor sit amet.', btn: 'Learn more' },
    { id: 4, img: Img4, title: 'Project 4', para: 'Lorem ipsum dolor sit amet.', btn: 'Learn more' }
];

const Projects = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulates a 2-second loading time
    }, []);

    return (
        <div className="">
            <div className="mt-4 mb-12 w-full min-h-screen">
                
                {/* Show loader while loading */}
                {loading ? (
                    <div className="flex justify-center items-center h-screen bg-white dark:invert">
                        <span className="sr-only">Loading...</span>
                        <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce"></div>
                    </div>
                ) : (
                    <div className="w-full min-h-screen px-4">
                        <h2 className="text-center text-4xl font-extrabold text-[#1f6462] pb-8">My Projects</h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {ProjectsData.map((project) => (
                                <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                                    {/* Image */}
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    {/* Overlay (Dark Background) */}
                                    <div className="absolute inset-0 bg-[#2a454e] bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                                        <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                                        <p className="text-gray-300">{project.para}</p>
                                        <a className="mt-3 bg-white text-[#1f6462] rounded-lg py-2 px-5 font-semibold transition duration-300 hover:bg-[#1f6462] hover:text-white" href="">
                                            {project.btn}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
