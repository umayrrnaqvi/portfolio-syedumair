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
      "A fully responsive developer portfolio built with Next.js and Tailwind CSS. It features smooth animations, dark mode support, reusable components, and optimized images. The site showcases my professional projects, skills, and achievements with a modern design approach.",
    image: PorTfolio,
    languages: ["HTML5", "JavaScript", "Tailwind CSS", "Next.js"],
    liveDemo: "https://hmzali.vercel.app",
    category: "Web",
  },
  {
    id: 2,
    title: "Food Website (BistroBliss)",
    description:
      "A dynamic restaurant booking and ordering platform designed for modern food businesses. It allows users to browse menus, book tables, and place online orders seamlessly.",
    image: bistrobliss,
    languages: ["React.js", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://bistrobliss-one.vercel.app",
    category: "Web",
  },
  {
    id: 3,
    title: "Recovery Circle",
    description:
      "A wellness platform built with Next.js, Stripe, and Zoom API for live therapy sessions. It includes dashboards, payment integration, and real-time scheduling.",
    image: recoverycircle,
    languages: ["Next.js", "React.js", "Tailwind CSS", "Stripe", "Zoom API"],
    liveDemo: "https://recoverycircle.org/",
    category: "Web",
  },
];

const filters = ["All", "Web", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);

  // ✅ Use smaller card width for mobile
  const cardWidth =
    typeof window !== "undefined" && window.innerWidth < 640 ? 320 : 420;

  // Clone for infinite loop
  const projectsWithClones =
    filteredProjects.length > 0
      ? [filteredProjects[filteredProjects.length - 1], ...filteredProjects, filteredProjects[0]]
      : [];

  // Auto slide every 3s
  useEffect(() => {
    if (!projectsWithClones.length) return;
    const interval = setInterval(() => handleScroll("right"), 3000);
    return () => clearInterval(interval);
  }, [projectsWithClones.length]);

  const handleScroll = (dir) => {
    if (!projectsWithClones.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (dir === "left" ? prev - 1 : prev + 1));
  };

  // Loop back seamlessly
  useEffect(() => {
    const slider = document.getElementById("slider-track");
    if (!slider) return;

    const handleTransitionEnd = () => {
      if (!projectsWithClones.length) return;
      if (currentIndex === projectsWithClones.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(projectsWithClones.length - 2);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, projectsWithClones.length]);

  return (
    <div className="bg-gray-100 w-full relative flex justify-center overflow-hidden">
      <section id="projects" className="px-4 py-16 w-full max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(1);
              }}
              className={`px-4 py-2 rounded-full border text-sm sm:text-base transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="bg-black text-white p-3 sm:p-4 rounded-full shadow hover:bg-blue-700 flex-shrink-0"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>

          {/* Cards Row */}
          <div className="relative overflow-hidden flex-1 w-[90%] sm:w-[300px] md:w-[1000px]">
            <div
              id="slider-track"
              className={`flex ${isTransitioning ? "transition-transform duration-300 ease-in-out" : ""}`}
              style={{
                transform: `translate3d(-${currentIndex * cardWidth}px, 0, 0)`,
                width: `${projectsWithClones.length * cardWidth}px`,
              }}
            >
              {projectsWithClones.map(
                (project, idx) =>
                  project && (
                    <div
                      key={idx}
                      className="min-w-[300px] sm:min-w-[400px] mx-2 bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden flex flex-col sm:p-3 p-2 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <img
                        src={project.image.src}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      <div className="p-3 flex flex-col justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-[12px] sm:text-sm text-gray-600 mb-3 dark:text-white leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
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
                            className="inline-block rounded-2xl px-5 py-2 text-sm sm:text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-105"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="bg-black text-white p-3 sm:p-4 rounded-full shadow hover:bg-blue-700 flex-shrink-0"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>
        </div>
      </section>
    </div>
  );
}
