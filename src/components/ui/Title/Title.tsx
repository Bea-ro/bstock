import { TitleStyled } from './TitleStyled';

const Title = ({ text, size, color, align }: Props) => {
  return (
    <TitleStyled size={size} color={color} align={align}>
      {text}
    </TitleStyled>
  );
};

export type Props = {
  text: string;
  size?: string;
  color?: string;
  align?: string;
};
export default Title;
