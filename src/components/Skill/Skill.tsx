import { SkillStyled } from './SkillStyled';

import Title from '../ui/Title/Title';

const Skill = ({ image, alt, title, text }: Props) => {
  return (
    <SkillStyled>
      <span>
        {' '}
        <img src={image} alt={alt} />
      </span>
      <Title text={title} size="22px" />
      <p>{text}</p>
    </SkillStyled>
  );
};

export type Props = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

export default Skill;
