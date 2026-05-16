"use client";

import React, { useState } from "react";
import { Home, Code, GraduationCap, Folder, Mail, MoreHorizontal, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, link: "#" },
  { name: "Tech Stack", icon: Code, link: "#TackStack" },
  { name: "Qualification", icon: GraduationCap, link: "#Qualification" },
  { name: "Projects", icon: Folder, link: "#projects" },
  { name: "Contact Me", icon: Mail, link: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50">
      <div
        className="
        flex items-center justify-between
        w-[92%] md:w-[80%] lg:w-[70%]
        px-4 py-3

        rounded-full
        backdrop-blur-xl

        bg-white/10
        dark:bg-[#0B1120]/60

        border border-white/10
        shadow-lg
      "
      >
        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-bold shadow-md">
          RA
          </div>
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <a
                key={i}
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`
                  flex items-center gap-2
                  px-4 py-2 rounded-full
                  text-sm font-medium
                  transition

                  ${
                    isActive
                      ? "bg-white/20 dark:bg-white/10 text-violet-400"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <Icon size={16} />
                {item.name}
              </a>
            );
          })}

          {/* MORE BUTTON */}
          <button className="p-2 rounded-full hover:bg-white/10 transition">
            <MoreHorizontal size={18} />
          </button>
        </div>

        {/* RIGHT DARK MODE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            w-10 h-10
            rounded-full
            flex items-center justify-center
            border border-white/10
            hover:border-violet-500
            transition
            text-white
          "
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;