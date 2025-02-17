// src/pages/Projects.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "cutepixo",
    title: "Cutepixo",
    description: "A fun pixel art project.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "A different cool project.",
    technologies: ["TypeScript", "Express", "PostgreSQL"],
  },
];

function Projects() {
  return (
    <motion.div
      className="relative max-w-4xl mx-auto p-6 bg-mainBg text-textPrimary min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Title */}
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

      {/* Project Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="block">
            <motion.div
              className="bg-softBg p-4 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-secondaryBg mb-4">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-secondaryBg text-softBg px-2 py-1 rounded text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* View Details Link (Can Remove If Not Needed) */}
              <p className="text-accent hover:text-secondaryBg mt-4 block">
                View Details →
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
