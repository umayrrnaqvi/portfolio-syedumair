'use client'
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className='w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative'>

        {/* Logo */}
        <div className='text-2xl font-bold text-blue-500 dark:text-white'>
          Syed Umair Ali
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-4'>
          {links.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`px-4 py-2 rounded-full text-lg font-normal transition hover:scale-105
                ${activeSection === link.id ? "bg-blue-500 text-white" : "text-[#26282b] dark:text-white"}
              `}
              onClick={() => setActiveSection(link.id)}
            >
              {link.name}
            </a>
          ))}

          {/* ✅ Theme Toggler on Desktop */}
          <div className="ml-4">
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Mobile Section (Menu + Toggler) */}
        <div className='md:hidden flex items-center gap-4 relative z-50'>
          {/* ✅ Theme Toggler on Mobile */}
          <AnimatedThemeToggler />

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className='text-2xl text-black dark:text-white cursor-pointer'
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
          }`}
      >
        <div className='flex flex-col gap-4 text-lg text-[#26282b] dark:text-white px-6'>
          {links.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                toggleMenu();
                setActiveSection(link.id);
              }}
              className={`px-4 py-2 rounded-full transition hover:text-blue-500 hover:scale-105
                ${activeSection === link.id ? "bg-blue-500 text-white" : ""}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>_
    </nav>
  );
};

export default Navbar;
