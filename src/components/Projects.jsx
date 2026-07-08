import React from "react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-[#0B1120] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-gray-100 dark:bg-[#111827]
                border border-gray-200 dark:border-gray-700
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-2
                hover:border-violet-500
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      rounded-full
                      border
                      border-gray-300 dark:border-gray-600
                      text-gray-700 dark:text-gray-200
                      hover:bg-violet-600
                      hover:text-white
                      hover:border-violet-600
                      transition-all
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      rounded-full
                      bg-violet-600
                      text-white
                      hover:bg-violet-700
                      transition-all
                    "
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