import React from "react";

const frontendSkills = [
  { name: "HTML5", icon: "html5.png" },
  { name: "CSS3", icon: "css3.png" },
  { name: "JavaScript", icon: "js.png" },
  { name: "React.js", icon: "react.png" },
  { name: "Next.js", icon: "next.png" },
  { name: "Tailwind CSS", icon: "tailwind.png" },
];

const backendSkills = [
  { name: "Node.js", icon: "node.png" },
  { name: "Express.js", icon: "express.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "PostgreSQL", icon: "sql.png" },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-4">My Technical Level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Frontend */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-center mb-10">
              Frontend Developer
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img
                    src={`/assets/${skill.icon}`}
                    alt={skill.name}
                    className="w-6 h-6 object-contain mt-1"
                  />

                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-gray-400">Expert</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-center mb-10">
              Backend Developer
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img
                    src={`/assets/${skill.icon}`}
                    alt={skill.name}
                    className="w-6 h-6 object-contain mt-1"
                  />

                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-gray-400">Intermediate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;