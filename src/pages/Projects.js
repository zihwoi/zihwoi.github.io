// src/pages/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects.ts";



function Projects() {
  return (
    <motion.div
      className="relative max-w-4xl mx-auto p-6 bg-mainBg text-textPrimary min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold text-accent mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        my projects
      </motion.h1>

      <motion.p
        className="text-lg text-textSecondary text-center mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        here are some of my featured projects!
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
