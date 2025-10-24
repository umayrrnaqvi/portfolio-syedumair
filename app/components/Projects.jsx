"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PorTfolio from "/public/portfolio.png";
import bistrobliss from "../../public/bistrobliss.png";
import recoverycircle from "../../public/recoverycircle.png";
import hurTech from "../../public/hurTech.png";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A fully responsive developer portfolio built with Next.js and Tailwind CSS. It features smooth animations, dark mode support, reusable components, and optimized images.",
    image: PorTfolio,
    languages: ["HTML5", "JavaScript", "Tailwind CSS", "Next.js"],
    liveDemo: "https://syedumair.vercel.app/",
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
  {
    id: 4,
    title: "HurTech LLC Website",
    description:
      "A professional corporate website developed for HurTech LLC, showcasing services, project portfolio, and client solutions with a modern and responsive UI built for performance and SEO.",
    image: hurTech,
    languages: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.hurtechllc.com/",
    category: "Web",
  },
];

const filters = ["All", "Web", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(420);
  const sliderRef = useRef(null);

  // ✅ Responsive card width
  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 640 ? window.innerWidth * 0.9 : 420);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth, { passive: true });
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);

  const projectsWithClones =
    filteredProjects.length > 0
      ? [
          filteredProjects[filteredProjects.length - 1],
          ...filteredProjects,
          filteredProjects[0],
        ]
      : [];

  // ✅ Auto-scroll (pause when user hovers)
  useEffect(() => {
    if (!projectsWithClones.length) return;
    const interval = setInterval(() => handleScroll("right"), 4000);
    return () => clearInterval(interval);
  }, [projectsWithClones.length]);

  const handleScroll = (dir) => {
    if (!projectsWithClones.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (dir === "left" ? prev - 1 : prev + 1));
  };

  // ✅ Smooth infinite scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
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
    <section
      id="projects"
      className="bg-background text-foreground w-full py-16 px-4 relative flex justify-center transition-colors duration-500"
      aria-label="Project Showcase"
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* 🔘 Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(1);
              }}
              className={`px-4 py-2 rounded-full border text-sm sm:text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-foreground border-border hover:bg-blue-100 dark:hover:bg-gray-800"
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ▶️ Slider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll("left")}
            className="hidden sm:flex bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="relative overflow-hidden flex-1 w-full sm:w-[1000px]">
            <div
              ref={sliderRef}
              className={`flex ${
                isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
              }`}
              style={{
                transform: `translate3d(-${currentIndex * cardWidth}px, 0, 0)`,
                width: `${projectsWithClones.length * cardWidth}px`,
              }}
            >
              {projectsWithClones.map(
                (project, idx) =>
                  project && (
                    <div
                      key={`${project.id}-${idx}`}
                      className="mx-auto sm:mx-2 bg-card dark:bg-gray-800 border border-border rounded-lg shadow-md overflow-hidden flex flex-col sm:p-3 p-2 transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                      style={{
                        minWidth: `${cardWidth}px`,
                        maxWidth: `${cardWidth}px`,
                      }}
                    >
                      {/* ✅ Use Next.js <Image> for optimization */}
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={420}
                        height={240}
                        placeholder="blur"
                        loading="lazy"
                        className="w-full h-48 sm:h-56 object-cover rounded-md"
                      />

                      <div className="p-3 flex flex-col justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed text-center">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {project.languages.map((lang, index) => (
                            <span
                              key={`${project.id}-${index}`}
                              className="text-xs bg-muted dark:bg-gray-900 text-foreground px-2 py-1 rounded-full"
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
                            className="inline-block rounded-xl px-5 py-2 text-sm sm:text-base font-medium bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition hover:scale-105"
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

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll("right")}
            className="hidden sm:flex bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
