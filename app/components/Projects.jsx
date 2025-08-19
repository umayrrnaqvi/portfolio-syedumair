"use client";
import React, { useState, useEffect } from "react";
import PorTfolio from "/public/portfolio.png";
import bistrobliss from "../../public/bistrobliss.png";
import recoverycircle from "../../public/recoverycircle.png";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A fully responsive developer portfolio built with Next.js and Tailwind CSS. It features smooth animations, dark mode support, reusable components, and optimized images. The site showcases my professional projects, skills, and achievements with a modern design approach. It also integrates SEO optimization and fast-loading performance, ensuring a great user experience across devices.",
    image: PorTfolio,
    languages: ["HTML5", "JavaScript", "Tailwind CSS", "Next.js"],
    liveDemo: "https://hmzali.vercel.app",
    category: "Web",
  },
  {
    id: 2,
    title: "Food Website (BistroBliss)",
    description:
      "A dynamic restaurant booking and ordering platform designed for modern food businesses. It allows users to browse menus, book tables, and place online orders seamlessly. Developed with React and Tailwind CSS, the website is fully responsive and optimized for mobile. Key features include interactive menu sections, call-to-action booking forms, and a sleek UI that delivers an enjoyable browsing experience.",
    image: bistrobliss,
    languages: ["React.js", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://bistrobliss-one.vercel.app",
    category: "Web",
  },
  {
    id: 3,
    title: "Recovery Circle",
    description:
      "A powerful online recovery and wellness platform designed to connect people with therapy, support groups, and wellness programs. Built using Next.js and integrated with Stripe for secure payments and Zoom API for live virtual sessions. The platform includes a robust user dashboard, real-time scheduling, and community features that help individuals manage and track their recovery journey effectively.",
    image: recoverycircle,
    languages: ["Next.js", "React.js", "Tailwind CSS", "Stripe", "Zoom API"],
    liveDemo: "https://recoverycircle.org/",
    category: "Web",
  },
];

const filters = ["All", "Web", "Mobile"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(1); // start at 1 (because of clone)
  const [isTransitioning, setIsTransitioning] = useState(true);

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);

  const cardWidth = 420; // card width + margin

  // Clone first & last cards for infinite loop
  const projectsWithClones = [
    filteredProjects[filteredProjects.length - 1],
    ...filteredProjects,
    filteredProjects[0],
  ];

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, [filteredProjects.length]);

  const handleScroll = (direction) => {
    setIsTransitioning(true);
    if (direction === "left") {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Seamless reset after transition ends
  useEffect(() => {
    const slider = document.getElementById("slider-track");

    const handleTransitionEnd = () => {
      if (currentIndex === projectsWithClones.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1); // back to first real card
      }
      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(projectsWithClones.length - 2); // last real card
      }
    };

    slider?.addEventListener("transitionend", handleTransitionEnd);
    return () => slider?.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, projectsWithClones.length]);

  return (
    <div className="bg-gray-100 w-full relative flex justify-center">
      <section id="projects" className="px-4 py-16 sm:w-7xl md:w-[80%] mx-auto flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(1); // reset on filter change
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider container with external buttons */}
        <div className="flex items-center justify-center gap-4 lg:w-[1400px] md:w-[full] sm:w-[500px]">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="bg-black text-white p-3 rounded-full shadow hover:bg-blue-700"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Cards row */}
          <div className="relative overflow-hidden flex-1 sm:w-[1200px] w-[350px] p-2">
            <div
              id="slider-track"
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-300 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translate3d(-${currentIndex * cardWidth}px, 0, 0)`,
                width: `${projectsWithClones.length * cardWidth}px`,
              }}
            >
              {projectsWithClones.map((project, idx) => (
                <div
                  key={idx}
                  className="sm:min-w-[300px] w-[394px] mx-2 bg-white   dark:bg-gray-600 rounded-xl shadow-md overflow-hidden 
                  flex flex-col justify-center sm:p-3 p-2 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                >
                  <img src={project.image.src} alt={project.title} />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="sm:text-sm text-[12px] sm:w-full w-80 text-gray-600 mb-4 dark:text-white">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.map((lang, index) => (
                        <span
                          key={`${project.id}-${index}`}
                          className="text-xs bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-full hover:scale-105 cursor-default"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="text-center mt-auto">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-2xl px-6 py-2 text-XL font-medium bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-105"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="bg-black text-white p-3 rounded-full shadow hover:bg-blue-700"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
