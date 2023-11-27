import { TechIconStyled } from './TechIconStyled';
import { Tech } from '../../types/tech';

const TechIcon = ({ tech }: Props) => {
  return (
    <TechIconStyled>
      <img src={tech.icon} alt={tech.name} />
    </TechIconStyled>
  );
};

export type Props = {
  tech: Tech;
};

export default TechIcon;
