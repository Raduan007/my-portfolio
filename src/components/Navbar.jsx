"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Code,
  GraduationCap,
  Folder,
  Mail,
  MoreHorizontal,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = [
  { name: "Home", icon: Home, link: "#" },
  { name: "Tech Stack", icon: Code, link: "#tech-stack" },
  { name: "Qualification", icon: GraduationCap, link: "#qualification" },
  { name: "Projects", icon: Folder, link: "#projects" },
  { name: "Contact Me", icon: Mail, link: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50">
      <div
        className="
          flex items-center justify-between
          w-[92%] md:w-[80%] lg:w-[70%]
          px-4 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/80 dark:bg-[#0B1120]/70
          border border-gray-300 dark:border-white/10
          shadow-lg
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
            <Image
              src="/assets/hello.png"
              alt="profile logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-violet-100 dark:bg-white/10 text-violet-600 dark:text-violet-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-white/10 hover:text-violet-600 dark:hover:text-white"
                }`}
              >
                <Icon size={16} />
                {item.name}
              </a>
            );
          })}

          <button className="p-2 rounded-full hover:bg-violet-100 dark:hover:bg-white/10 transition">
            <MoreHorizontal
              size={18}
              className="text-gray-700 dark:text-white"
            />
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            w-10 h-10
            rounded-full
            flex items-center justify-center
            border border-gray-300 dark:border-white/10
            hover:border-violet-500
            transition
          "
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400" size={18} />
          ) : (
            <Moon className="text-gray-700" size={18} />
          )}
        </button>
      </div>
    </div>
  );
}