// src/components/projects/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project, showAscii = false }) => (
  <Link to={`/projects/${project.id}`} className="block">
    <motion.div
      className="bg-softBg p-4 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {showAscii && project.ascii && (
        <pre className="text-xs font-mono leading-tight text-center whitespace-pre-wrap">
          {project.ascii}
        </pre>
      )}
      <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
      <p className="text-secondaryBg mb-4">{project.description}</p>
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
    </motion.div>
  </Link>
);