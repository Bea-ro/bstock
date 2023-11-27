import { HeaderStyled } from './HeaderStyled';

import Navbar from '../ui/Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo size="32px"></Logo>
      <Navbar></Navbar>
    </HeaderStyled>
  );
};

export default Header;
