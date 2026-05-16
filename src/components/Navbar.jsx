"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-md
      bg-white/70
      dark:bg-[#050816]/80
      border-b
      border-black/10
      dark:border-white/10
      transition-all
      duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center font-bold text-white">
            R
          </div>

          <h1 className="text-2xl font-bold text-black dark:text-white">
            Raduan
            <span className="text-violet-500">.</span>
          </h1>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <a
            href="#"
            className="text-black dark:text-white hover:text-violet-500 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-black dark:text-white hover:text-violet-500 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-black dark:text-white hover:text-violet-500 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-black dark:text-white hover:text-violet-500 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-black dark:text-white hover:text-violet-500 transition"
          >
            Contact
          </a>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
          w-11
          h-11
          rounded-full
          border
          border-black/10
          dark:border-white/20
          flex
          items-center
          justify-center
          hover:border-violet-500
          transition
          text-black
          dark:text-white
        "
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;