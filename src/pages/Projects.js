// src/pages/Projects.js
import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects.ts";

function Projects() {
  return (
    <MotionWrapper title="my projects" subtitle="here are some of my featured projects!">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MotionWrapper>
  );
}

export default Projects;
