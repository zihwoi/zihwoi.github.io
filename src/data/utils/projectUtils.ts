import { Project } from '../types/project';
import { projects } from '../projects';  

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getLatestProjects = (limit: number = 3): Project[] => {
  return [...projects]
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
    .slice(0, limit);
};