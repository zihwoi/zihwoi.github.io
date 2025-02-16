// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: "cutepixo",
      title: "cutepixo",
      description: "A brief description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "project-2",
      title: "Project 2",
      description: "A brief description of project 2",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-mainBg text-accent">
      <h2 className="text-3xl font-bold mb-6">
        my projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.id} className="bg-softBg p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-accent mb-2">
              {project.title}
            </h3>
            <p className="text-secondaryBg mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-secondaryBg text-softBg px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="text-accent hover:text-secondaryBg mt-4 block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
