import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "Firebase",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500 hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;