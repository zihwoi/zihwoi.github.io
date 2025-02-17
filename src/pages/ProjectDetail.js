// src/pages/ProjectDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const projectData = {
  cutepixo: {
    title: "Cutepixo",
    description: "A fun pixel art project that uses React and MongoDB.",
    details: `
      Cutepixo is a pixel art generator built with React.
      It allows users to create, save, and share pixel artworks.
      This project taught me state management and canvas rendering.
    `,
    technologies: ["React", "Node.js", "MongoDB"],
    ascii: `
      ⠀⠀⠀⣀⡀⠀
      ⠀⡔⠁⡸⠉⡢⠤⣀⡀⠀
      ⢠⡇⠀⠃⠠⠊⡀⠈⠙⠆⠀
      ⠸⡀⠀⢆⢀⠌⠠⠀⠁⡄⠀
      ⠀⠣⡀⠈⠊⠤⠔⠊⠁⠀
    `,
  },
  "project-2": {
    title: "Project 2",
    description: "A different cool project built with TypeScript and PostgreSQL.",
    details: `
      Project 2 focuses on efficient database management and UI improvements.
      I learned how to optimize database queries and create smooth frontend interactions.
    `,
    technologies: ["TypeScript", "Express", "PostgreSQL"],
    ascii: `
      ┌──────────────────┐
      │ Project 2        │
      │  Database App    │
      └──────────────────┘
    `,
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>
        <Link to="/projects" className="text-blue-500 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-mainBg text-textPrimary min-h-screen">
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-accent mb-4 text-center">
        {project.title}
      </h1>

      {/* ASCII Art (If Available) */}
      {project.ascii && (
        <pre className="text-sm font-mono leading-tight text-center whitespace-pre-wrap mb-4">
          {project.ascii}
        </pre>
      )}

      {/* Description */}
      <p className="text-lg text-textSecondary mb-6">{project.description}</p>

      {/* Detailed Explanation */}
      <p className="text-textPrimary mb-6">{project.details}</p>

      {/* Technologies Used */}
      <h3 className="text-xl font-semibold text-accent mb-2">Technologies Used:</h3>
      <ul className="list-disc list-inside text-textPrimary mb-6">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {/* Back to Projects Link */}
      <Link to="/projects" className="text-accent hover:text-secondaryBg">
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;
