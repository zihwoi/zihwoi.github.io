// src/pages/Projects.js
import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <MotionWrapper title="my projects" subtitle="here are some of my featured projects!">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MotionWrapper>
  );
}

export default Projects;