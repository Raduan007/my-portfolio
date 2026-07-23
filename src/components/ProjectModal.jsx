"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0B1120] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="w-full h-32 sm:h-48 relative shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Demo
                  </a>
                )}
                {project.githubClient && (
                  <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium rounded-full transition-colors border border-white/10">
                    <Code className="w-3.5 h-3.5 mr-1.5" /> Client
                  </a>
                )}
                {project.githubServer && (
                  <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium rounded-full transition-colors border border-white/10">
                    <Code className="w-3.5 h-3.5 mr-1.5" /> Server
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col">
            <div className="grid md:grid-cols-3 gap-5">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-4">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.fullDescription || project.description}
                  </p>
                </section>

                {project.features && (
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#111827] p-4 rounded-xl border border-gray-200 dark:border-gray-800 h-full">
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.technologies || []).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
