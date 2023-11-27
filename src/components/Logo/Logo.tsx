import { LogoStyled } from './LogoStyled';

const Logo = ({ size, color }: Props) => {
  return (
    <LogoStyled size={size} color={color}>
      BStock
    </LogoStyled>
  );
};

export type Props = {
  size: string;
  color?: string;
};

export default Logo;
