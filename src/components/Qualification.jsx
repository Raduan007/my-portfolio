"use client";

import React, { useState } from "react";

const educationData = [
  {
    title: "SSC",
    place: "Asrafali ML High School",
    year: "2020 - 2022",
  },
  {
    title: "HSC",
    place: "Kalikair College",
    year: "2022 - 2024",
  },
];

const experienceData = [
  {
    title: "Frontend Developer",
    place: "Self-learning / Online Courses",
    year: "2026 - Present",
  },
];

export default function Qualification() {
  const [tab, setTab] = useState("education");

  const data = tab === "education" ? educationData : experienceData;

  return (
    <section
      id="qualification"
      className="relative min-h-screen py-24 px-6 bg-white dark:bg-[#0B1120] transition-colors duration-300"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Qualification
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          My personal journey
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-5 mb-16">
        <button
          onClick={() => setTab("experience")}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            tab === "experience"
              ? "bg-violet-600 text-white"
              : "bg-gray-100 dark:bg-[#1F2937] text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-[#374151]"
          }`}
        >
          💼 Experience
        </button>

        <button
          onClick={() => setTab("education")}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            tab === "education"
              ? "bg-violet-600 text-white"
              : "bg-gray-100 dark:bg-[#1F2937] text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-[#374151]"
          }`}
        >
          🎓 Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

        <div className="space-y-10">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-9 items-center"
              >
                {/* Left Card */}
                <div className="col-span-4 flex justify-end">
                  {isLeft && (
                    <div className="w-full max-w-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#111827] transition-colors duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {item.place}
                      </p>

                      <p className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                        📅 {item.year}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="col-span-1 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-violet-600 border-4 border-white dark:border-[#0B1120]"></div>
                </div>

                {/* Right Card */}
                <div className="col-span-4 flex justify-start">
                  {!isLeft && (
                    <div className="w-full max-w-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#111827] transition-colors duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {item.place}
                      </p>

                      <p className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                        📅 {item.year}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}