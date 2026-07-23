"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = ["A Web Developer", "A UI/UX Designer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-24 text-black dark:text-white transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="uppercase tracking-[5px]">
            <span className="text-2xl">Hi, I’m</span>
            <br />
            <span className="text-violet-500 text-5xl">Raduan</span>
          </p>

          {/* ROLE SWITCH */}
          <div className="h-[60px] flex items-center text-3xl md:text-5xl font-bold">
            <span className="text-gray-700 dark:text-gray-300 mr-3">
              I am a
            </span>

            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-fuchsia-500"
            >
              {roles[index]}
            </motion.span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl leading-relaxed">
            I build modern, responsive, and user-friendly websites using
            Next.js, React, Tailwind CSS, and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
             href="/assets/Resume of Raduan.pdf" download
              className="px-7 py-3 rounded-full border border-black/10 dark:border-white/20 hover:border-violet-500 transition"
            >
            
           Download Resume

            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 pl-15">

         <a
           href="https://github.com/Raduan007"
           target="_blank"
           className="p-3 rounded-full bg-white/10 hover:bg-violet-500 transition"
         >
           <Image
             src="/assets/github.png"
             alt="github"
             width={22}
             height={22}
           />
         </a>
        
         <a
           href="https://www.linkedin.com/in/raduanhossen857/"
           target="_blank"
           className="p-3 rounded-full bg-white/10 hover:bg-violet-500 transition"
         >
           <Image
             src="/assets/linkedin.png"
             alt="linkedin"
             width={22}
             height={22}
           />
         </a>
        
         <a
           href="https://web.facebook.com/raduan.hossen.24521"
           target="_blank"
           className="p-3 rounded-full bg-white/10 hover:bg-violet-500 transition"
         >
           <Image
             src="/assets/facebook.png"
             alt="facebook"
             width={22}
             height={22}
           />
         </a>
        
         <a
           href="https://t.me"
           target="_blank"
           className="p-3 rounded-full bg-white/10 hover:bg-violet-500 transition"
         >
           <Image
             src="/assets/twitter.png"
             alt="twitter"
             width={22}
             height={22}
           />
         </a>
        
        </div>
               </motion.div>

        {/* RIGHT SIDE IMAGE + FLOATING CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative">

            {/* IMAGE */}
            <div className="p-2 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-2xl shadow-violet-500/30">
              <Image
                src="/assets/hello.png"
                alt="profile"
                width={380}
                height={380}
                className="rounded-full object-cover w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
              />
            </div>

            {/* CARD 1 */}
            <div className="absolute -left-35 top-30 w-44 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <h2 className="text-xl font-bold text-violet-400">6+</h2>
              <p className="text-gray-300 text-sm">Months Experience</p>
            </div>

            {/* CARD 2 */}
            <div className="absolute -right-20 top-5 w-44 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <h2 className="text-xl font-bold text-fuchsia-400">20+</h2>
              <p className="text-gray-300 text-sm">Projects Completed</p>
            </div>

            {/* CARD 3 */}
            <div className="absolute left-2/3 -translate-x-1/2 -bottom-16 w-52 p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-center shadow-lg">
              <h2 className="text-xl font-bold">150+</h2>
              <p className="text-sm">Problems Solved</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;