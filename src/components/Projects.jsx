import React from "react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-violet-500 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;