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
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-24

      text-black
      dark:text-white

      transition-all
      duration-300
    "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-violet-500 uppercase tracking-[5px]">
            Welcome To My Portfolio
          </p>

  

          {/* PROFESSIONAL ROLE SWITCH */}
          <div className="h-[60px] flex items-center text-3xl md:text-5xl font-bold">
            <span className="text-gray-700 dark:text-gray-300 mr-3">
           Hi, I’m
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
              className="
              px-7 py-3 rounded-full
              bg-gradient-to-r from-violet-600 to-fuchsia-500
              text-white
              hover:scale-105
              transition
            "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              px-7 py-3 rounded-full
              border border-black/10 dark:border-white/20
              hover:border-violet-500
              transition
            "
            >
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="
            p-2
            rounded-full
            bg-gradient-to-br from-violet-600 to-fuchsia-500
            shadow-2xl shadow-violet-500/30
          "
          >
            <Image
            src="/assets/hello.png"
              alt="profile"
              width={380}
              height={380}
              className="
                rounded-full
                object-cover
                w-[320px]
                h-[320px]
                md:w-[380px]
                md:h-[380px]
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;