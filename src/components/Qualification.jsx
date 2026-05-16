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

const Qualification = () => {
  const [tab, setTab] = useState("education");

  const data = tab === "education" ? educationData : experienceData;

  return (
    <section id="qualification" className="relative py-24 bg-[#030712] text-white min-h-screen">
      {/* Optional: Add background stars styles or elements here if needed */}
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">Qualification</h2>
        <p className="text-gray-400 text-sm mt-1">My personal journey</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-16">
        <button
          onClick={() => setTab("experience")}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all ${
            tab === "experience"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>💼</span> Experience
        </button>

        <button
          onClick={() => setTab("education")}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all ${
            tab === "education"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>🎓</span> Education
        </button>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl mx-auto px-4">
        
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/20" />

        {/* Timeline Grid */}
        <div className="space-y-4 relative">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`grid grid-cols-9 items-center w-full`}
              >
                {/* Left Side Content */}
                <div className="col-span-4 flex justify-end">
                  {isLeft && (
                    <div className="bg-[#111827]/60 border border-white/10 p-5 rounded-xl w-full max-w-sm backdrop-blur-sm shadow-xl">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.place}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs mt-3">
                        <span>📅</span> {item.year}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Node Dot */}
                <div className="col-span-1 flex justify-center relative">
                  <div className="w-3 h-3 bg-white rounded-full z-10 border-4 border-[#030712] ring-1 ring-white/30" />
                </div>

                {/* Right Side Content */}
                <div className="col-span-4 flex justify-start">
                  {!isLeft && (
                    <div className="bg-[#111827]/60 border border-white/10 p-5 rounded-xl w-full max-w-sm backdrop-blur-sm shadow-xl">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.place}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs mt-3">
                        <span>📅</span> {item.year}
                      </div>
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
};

export default Qualification;