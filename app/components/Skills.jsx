"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker"; // ✅ import ticker

const languageIcons = [
  <FaHtml5 className="text-orange-500 text-6xl" />,
  <FaCss3Alt className="text-blue-500 text-6xl" />,
  <FaJs className="text-yellow-400 text-6xl" />,
  <FaReact className="text-cyan-400 text-6xl" />,
  <FaNodeJs className="text-green-600 text-6xl" />,
  <SiTailwindcss className="text-sky-400 text-6xl" />,
  <SiNextdotjs className="text-black text-6xl" />,
  <FaGitAlt className="text-red-500 text-6xl" />,
  <FaBootstrap className="text-purple-500 text-6xl" />,
];

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, percent: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, percent: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, percent: 85 },
  { name: "React", icon: <FaReact className="text-cyan-400" />, percent: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, percent: 75 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, percent: 95 },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" />, percent: 80 },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, percent: 80 },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, percent: 80 },
];

const Skills = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // animate to real percentages
          skills.forEach((skill, i) => {
            setTimeout(() => {
              setProgress((prev) => {
                const updated = [...prev];
                updated[i] = skill.percent;
                return updated;
              });
            }, i * 200);
          });
        } else {
          // reset back to 0 when leaving viewport
          setProgress(skills.map(() => 0));
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="px-4 py-16 w-full dark:bg-black text-gray-800 dark:text-white relative"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      {/* 🔥 Animated Row with MagicUI Marquee */}
      <Marquee pauseOnHover className="[--duration:25s] mb-12">
        {languageIcons.map((icon, i) => (
          <div
            key={i}
            className="mx-6 flex items-center justify-center w-24 h-24 rounded-xl dark:bg-gray-700 bg-white shadow hover:scale-105 transition duration-300"
          >
            {icon}
          </div>
        ))}
      </Marquee>

      {/* 🔥 Progress Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-100 p-4 rounded-xl shadow-md transition hover:shadow-lg hover:scale-105 dark:bg-gray-600"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <span className="font-semibold">{skill.name}</span>
              <span className="ml-auto text-sm text-gray-600 dark:text-white flex items-center gap-1">
                <NumberTicker
                  value={progress[i]}
                  startValue={0}
                  className="font-semibold"
                />
                %
              </span>
            </div>
            <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
                style={{ width: `${progress[i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
