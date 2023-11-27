import { NavbarStyled } from './NavbarStyled';

const Navbar = ({ mobileMenuIsOpen }: Props) => {
  return (
    <NavbarStyled mobileMenuIsOpen={mobileMenuIsOpen}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/proyectos">Proyectos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export type Props = {
  mobileMenuIsOpen: boolean;
};

export default Navbar;
