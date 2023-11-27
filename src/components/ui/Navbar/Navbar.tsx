import { NavbarStyled } from './NavbarStyled'

const Navbar = () => {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/proyectos'>Proyectos</a>
        </li>
        <li>
          <a href='/contacto'>Contacto</a>
        </li>
      </ul>
    </NavbarStyled>
  )
}

export default Navbar
