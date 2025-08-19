'use client'
import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-2xl font-bold text-blue-500 dark:text-white'>
          Syed Umair Ali
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-10 text-[#26282b] dark:text-white text-lg font-normal'>
          <a href="#home" className='hover:text-blue-500 hover:underline hover:scale-110 transition'>Home</a>
          <a href="#about" className='hover:text-blue-500 hover:underline hover:scale-110 transition'>About</a>
          <a href="#skills" className='hover:text-blue-500 hover:underline hover:scale-110 transition'>Skills</a>
          <a href="#projects" className='hover:text-blue-500 hover:underline hover:scale-110 transition'>Projects</a>
          <a href="#contact" className='hover:text-blue-500 hover:underline hover:scale-110 transition'>Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center gap-3 relative z-50'>
          {/* Dark Mode Button (optional) */}
          {/* <button className="text-black dark:text-white text-2xl"><FaMoon /></button> */}
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
        className={`md:hidden w-full bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col gap-4 text-lg text-[#26282b] dark:text-white px-6'>
          <a href="#home" onClick={toggleMenu} className='hover:text-blue-500 hover:underline transition'>Home</a>
          <a href="#about" onClick={toggleMenu} className='hover:text-blue-500 hover:underline transition'>About</a>
          <a href="#skills" onClick={toggleMenu} className='hover:text-blue-500 hover:underline transition'>Skills</a>
          <a href="#projects" onClick={toggleMenu} className='hover:text-blue-500 hover:underline transition'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='hover:text-blue-500 hover:underline transition'>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
