import { ProjectsListStyled } from './ProjectsListStyled';
import { projects } from '../../../data/projects';
import { Project } from '../../../types/project';

import ProjectCard from '../../ProjectCard/ProjectCard';

const ProjectsList = () => {
  return (
    <ProjectsListStyled>
      {projects.map((project: Project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsListStyled>
  );
};

export default ProjectsList;
