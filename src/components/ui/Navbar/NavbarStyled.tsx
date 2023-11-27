import { styled } from 'styled-components';

export const NavbarStyled = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

  a {
    padding: 8px 10px;
    font-size: 13px;
    font-weight: 600;
    color: black;
  }

  a:hover {
    color: var(--color-grey);
  }
`;
