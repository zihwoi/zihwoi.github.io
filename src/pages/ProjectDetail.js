// src/pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  cutepixo: {
    title: "Cutepixo",
    description: "A fun pixel art project that uses React and MongoDB.",
    details: "This project allows users to create pixel art, save it, and share with others.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  "project-2": {
    title: "Project 2",
    description: "A different cool project built with TypeScript and PostgreSQL.",
    details: "This project focuses on efficient database management and UI improvements.",
    technologies: ["TypeScript", "Express", "PostgreSQL"],
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div className="max-w-4xl mx-auto p-6">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        {project.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
        {project.description}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.details}
      </p>
      <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
        Technologies Used:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;
