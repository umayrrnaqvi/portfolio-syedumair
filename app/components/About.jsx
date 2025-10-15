'use client';
import Image from "next/image";
import profilePic from "../../public/about.png";
import { BorderBeam } from "@/components/magicui/border-beam";

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaDownload
} from "react-icons/fa";
import {
    HiOutlineBriefcase,
    HiOutlineAcademicCap
} from "react-icons/hi";

const About = () => {
    return (
        <section id="about" className="dark:bg-black dark:text-white">
            <div className="h-full md:min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-5">
                <h1 className="text-4xl font-bold text-center mb-20 mt-8">About Me</h1>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    
                    {/* Profile Card */}
                    <div className="relative h-[540px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center cursor-pointer hover:scale-105 hover:shadow-2xl duration-700">
                        <div className="flex justify-center">
                            <Image
                                src={profilePic}
                                alt="Umair Ali"
                                className="rounded-[100%] hover:scale-105 hover:shadow-2xl duration-700"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h2 className="text-xl font-bold m-3">SYED UMAIR</h2>
                        <p className="text-gray-500 dark:text-gray-300 mb-4 font-bold">Frontend Web Developer</p>
                        <ul className="text-center text-sm space-y-3 flex-col flex gap-2">
                            <li className="flex items-center gap-2">
                                <HiOutlineBriefcase className="text-blue-500" />
                                <span><strong>Name:</strong> Syed Umair</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span><strong>Location:</strong> Bahawalpur, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                <span><strong>Email:</strong> umairnaqvi902@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-blue-500" />
                                <span><strong>Phone:</strong> +92 312-6430506</span>
                            </li>
                        </ul>
                        <a
                            download="/Syed_Umair_Ali.pdf"
                            href="/Syed_Umair_Ali.pdf"
                            className="cursor-pointer mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold hover:scale-105 py-2 px-4 rounded-lg hover:bg-blue-700">
                            <FaDownload /> Download Resume
                        </a>

                        {/* BorderBeam */}
                        <BorderBeam duration={6} size={400} className="from-transparent via-blue-500 to-transparent" />
                        <BorderBeam duration={6} delay={3} size={400} borderWidth={2} className="from-transparent via-black to-transparent" />
                    </div>

                    {/* Work Experience + Education */}
                    <div className="md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-6">

                            {/* Work Experience */}
                            <div className="w-full">
                                <h3 className="text-xl font-semibold mx-4">Work Experience</h3>
                                <div className="p-4 flex-col flex gap-5">
                                    {[
                                        {
                                            title: "Frontend Developer",
                                            company: "HurTech- Bahawalpur | 01/2024 - Present",
                                            desc: "Developed responsive and high-performance web applications using React.js, Next.js, Tailwind CSS, and JavaScript."
                                        },
                                        {
                                            title: "Frontend Intern",
                                            company: "HurTech- Bahawalpur | 06/2023 - 12/2023",
                                            desc: "Collaborated with a cross-functional team to develop responsive web applications using HTML, CSS, JavaScript, and Angular/React."
                                        },
                                        {
                                            title: "Frontend Teacher",
                                            company: "HurTech – Bahawalpur | 02/2025 – Present",
                                            desc: "Taught frontend web development from basics to advanced, covering HTML, CSS, JavaScript, React.js, and Next.js. Guided students through projects, coding best practices, and modern frontend workflows."
                                        }
                                    ].map((job, i) => (
                                        <div key={i} className="relative bg-white dark:bg-gray-800 rounded-xl w-full flex-col flex justify-center px-4 py-3 gap-2 hover:scale-105 hover:shadow-2xl duration-700">
                                            <h4 className="font-bold flex items-center gap-2">
                                                <HiOutlineBriefcase className="text-blue-600" /> {job.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-300">{job.company}</p>
                                            <p className="text-sm">{job.desc}</p>

                                            {/* BorderBeam */}
                                            <BorderBeam duration={6} size={350} className="from-transparent via-blue-500 to-transparent" />
                                            <BorderBeam duration={6} delay={3} size={350} borderWidth={2} className="from-transparent via-black to-transparent" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="w-full">
                                <h3 className="text-2xl font-semibold mx-4">Education</h3>
                                <div className="p-4 flex-col flex gap-5">
                                    {[
                                        { degree: "BSCS", school: "Islamia University Bahawalpur", years: "|2021 - 2024|" },
                                        { degree: "ICS", school: "Govt College of Bahawalnagar", years: "|2018 - 2020|" },
                                        { degree: "Matric", school: "Aziz-e-millat High School BWN", years: "|2014 - 2016|" }
                                    ].map((edu, i) => (
                                        <div key={i} className="relative bg-white dark:bg-gray-800 rounded-xl flex-col flex justify-center px-4 py-2 w-full hover:scale-105 hover:shadow-2xl duration-700">
                                            <h4 className="font-bold flex items-center gap-2">
                                                <HiOutlineAcademicCap className="text-blue-600 text-xl" /> {edu.degree}
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-300">
                                                {edu.school} <br /> {edu.years}
                                            </p>

                                            {/* BorderBeam */}
                                            <BorderBeam duration={6} size={300} className="from-transparent via-blue-500 to-transparent" />
                                            <BorderBeam duration={6} delay={3} size={300} borderWidth={2} className="from-transparent via-black to-transparent" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
    