import { styled } from 'styled-components';

export const NavbarStyled = styled.nav<{ mobileMenuIsOpen: boolean }>`
  z-index: ${(props) => (props.mobileMenuIsOpen ? '1' : 'auto')};
  position: ${(props) => (props.mobileMenuIsOpen ? 'absolute' : 'auto')};
  margin-top: ${(props) => (props.mobileMenuIsOpen ? '44vh' : '0')};
  width: ${(props) => (props.mobileMenuIsOpen ? '90%' : 'auto')};
  background-color: var(--color-white);

  ul {
    display: flex;
    flex-direction: ${(props) => (props.mobileMenuIsOpen ? 'column' : 'row')};
    gap: 30px;
  }

  a {
    padding: 10px;
    font-size: 13px;
    font-weight: 600;
    color: black;
  }

  a:hover {
    color: var(--color-grey);
  }

  @media screen and (max-width: 567px) {
    display: ${(props) => (props.mobileMenuIsOpen ? 'block' : 'none')};
  }
`;
