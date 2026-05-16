"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-violet-400 uppercase tracking-widest">
            New Web Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m <span className="text-violet-500">Raduan</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            I build responsive and modern web applications using React,
            Next.js, Tailwind CSS, and MongoDB.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-violet-500 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 shadow-2xl shadow-violet-500/30">
            <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center text-7xl font-bold">
              R
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;