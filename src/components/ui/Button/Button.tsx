import { ButtonStyled } from './BuutonStyled';

const Button = ({ href, text }: Props) => {
  return <ButtonStyled href={href}>{text}</ButtonStyled>;
};

export type Props = {
  href: string;
  text: string;
};

export default Button;
