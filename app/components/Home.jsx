import React from 'react'
import Image from 'next/image'
import homeimg from '../../public/homeimg.png' // replace with your actual image
import Typewriter from './Typewriter'

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl mx-auto">

                {/* Left Content */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Hi, I'm <span className="text-blue-600">Syed Umair</span>
                    </h1>


                    {/* Typewriter text */}
                    <div className="mt-3 flex justify-center md:justify-start">
                        <div className="text-base sm:text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300 leading-relaxed break-words whitespace-normal max-w-full">
                            <Typewriter />
                        </div>
                    </div>


                    <p className="text-gray-700 dark:text-gray-400 mt-4">
                        I specialize in building modern, scalable, and high-performance web applications.
                        From dynamic websites to responsive UIs, I craft seamless digital experiences
                        with clean, efficient, and intuitive designs.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
                            View Projects
                        </a>
                        <a href="#contact" className="bg-gray-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-md overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 hover:scale-110 duration-500">
                    <Image src={homeimg} alt="Hamza Profile" className="object-cover w-full h-full cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default Home
