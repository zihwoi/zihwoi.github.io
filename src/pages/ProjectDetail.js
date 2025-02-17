import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data"; // Importing centralized data

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

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
      <h1 className="text-4xl font-bold text-accent mb-4 text-center">{project.title}</h1>

      {project.ascii && (
        <pre className="text-sm font-mono leading-tight text-center whitespace-pre-wrap mb-4">
          {project.ascii}
        </pre>
      )}

      <p className="text-lg text-textSecondary mb-6">{project.description}</p>
      <p className="text-textPrimary mb-6">{project.details}</p>

      <h3 className="text-xl font-semibold text-accent mb-2">Technologies Used:</h3>
      <ul className="list-disc list-inside text-textPrimary mb-6">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {/* Project Link Button */}
      {project.link && (
        <div className="text-center mb-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-secondaryBg transition"
          >
            Visit Project
          </a>
        </div>
      )}

      <div className="text-left">
        <Link to="/projects" className="text-accent hover:text-secondaryBg">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
