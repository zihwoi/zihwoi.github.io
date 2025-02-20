import { useMemo } from 'react';
import { projects } from '../data/projects';

export const useProjectData = (projectId) => {
  return useMemo(() => {
    return projects.find(project => project.id === projectId);
  }, [projectId]);
};