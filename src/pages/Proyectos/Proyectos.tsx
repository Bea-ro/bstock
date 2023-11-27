import { ProyectosStyled } from './ProyectosStyled';

import ProjectsList from '../../components/ui/ProjectsList/ProjectsList';
import Title from '../../components/ui/Title/Title';

const Proyectos = () => {
  return (
    <ProyectosStyled>
      <Title text="#MisProyectos" />
      <ProjectsList />
    </ProyectosStyled>
  );
};

export default Proyectos;
