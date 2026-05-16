"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Raduan<span className="text-violet-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-violet-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-violet-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-violet-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-violet-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;