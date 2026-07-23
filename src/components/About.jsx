"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-16 md:py-20 flex items-center px-6 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="p-2 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-xl">

            <Image
              src="/assets/hello1.png"
              alt="about image"
              width={320}
              height={320}
              className="rounded-2xl object-cover w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            />

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-violet-500">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            I am <span className="text-violet-500 font-semibold">Raduan</span>, a Frontend Developer. My coding journey started from a curiosity about the web and quickly became my career. I love crafting pixel-perfect, interactive UI experiences using React, Next.js, and Tailwind CSS.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Outside of programming, I enjoy exploring new tech, playing sports, and creating digital art. Staying active and creative keeps me inspired to solve complex technical problems!
          </p>

          {/* SKILLS */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-violet-400">Frontend</h3>
              <p className="text-gray-400 text-sm mt-1">React, Next.js, Tailwind</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-fuchsia-400">Backend</h3>
              <p className="text-gray-400 text-sm mt-1">Node.js, MongoDB</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md sm:col-span-2">
              <h3 className="text-xl font-bold text-violet-400">Tools</h3>
              <p className="text-gray-400 text-sm mt-1">Git, GitHub, Figma</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;