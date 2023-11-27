import { ProjectsListStyled } from './ProjectsListStyled';
import { projects } from '../../../data/projects';
import { Project } from '../../../types/project';

import ProjectCard from '../../ProjectCard/ProjectCard';

const ProjectsList = ({ padding }: Props) => {
  return (
    <ProjectsListStyled padding={padding}>
      {projects.map((project: Project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsListStyled>
  );
};

export type Props = {
  padding?: string;
};

export default ProjectsList;
