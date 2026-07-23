"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react";

export default function ProjectDetailsClient({ project }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="initial" animate="animate" variants={stagger}>
          {/* Back Button */}
          <motion.div variants={fadeIn} className="mb-8">
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeIn} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
              {project.githubClient && (
                <a 
                  href={project.githubClient} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Github Client
                </a>
              )}
              {project.githubServer && (
                <a 
                  href={project.githubServer} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Github Server
                </a>
              )}
            </div>
          </motion.div>

          {/* Banner Image */}
          <motion.div variants={fadeIn} className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <motion.section variants={fadeIn}>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription || project.description}
                </p>
              </motion.section>

              {project.features && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {project.challenges && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Challenges</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </motion.section>
              )}

              {project.solution && (
                <motion.section variants={fadeIn}>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Solution</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div variants={fadeIn} className="bg-gray-50 dark:bg-[#111827] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
