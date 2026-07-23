"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { Code } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              className="bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-violet-500 transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover shrink-0"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.shortDescription || project.description}
                </p>

                {/* Footer of Card */}
                <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-700">
                  
                  {/* Left Side: Github Links */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {project.githubClient && (
                      <a 
                        href={project.githubClient} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center transition-colors"
                      >
                        <Code className="w-4 h-4 mr-1.5" /> Client
                      </a>
                    )}
                    {project.githubServer && (
                      <a 
                        href={project.githubServer} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center transition-colors"
                      >
                        <Code className="w-4 h-4 mr-1.5" /> Server
                      </a>
                    )}
                  </div>

                  {/* Right Side: View Details */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 shrink-0"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;