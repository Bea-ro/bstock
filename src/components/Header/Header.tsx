import { useState } from 'react';
import { HeaderStyled } from './HeaderStyled';

import Navbar from '../ui/Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  const openMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };
  return (
    <HeaderStyled mobileMenuIsOpen={mobileMenuIsOpen}>
      <Logo size="32px"></Logo>
      <span className="burguer" onClick={openMobileMenu}>
        ☰
      </span>
      <Navbar mobileMenuIsOpen={mobileMenuIsOpen}></Navbar>
    </HeaderStyled>
  );
};

export default Header;
