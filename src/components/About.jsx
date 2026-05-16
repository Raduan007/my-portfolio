import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a passionate frontend web developer who enjoys building
            beautiful and responsive websites. I love learning new
            technologies and improving my development skills every day.
            My current stack includes React, Next.js, Tailwind CSS,
            MongoDB, and Firebase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;