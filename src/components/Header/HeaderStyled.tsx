import { styled } from 'styled-components';

export const HeaderStyled = styled.header<{ mobileMenuIsOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 20vh;
  background-color: var(--color-white);
  padding: 0 12px;
  gap: 14px;

  .burguer {
    display: none;
    color: ${(props) => (props.mobileMenuIsOpen ? 'var(--color-white)' : 'var(--color-primary)')};
    background-color: ${(props) =>
      props.mobileMenuIsOpen ? 'var(--color-primary)' : 'var(--color-white)'};
    padding: 6px;
    border-radius: 3px;
  }

  @media screen and (max-width: 757px) {
    justify-content: space-between;
    padding: 0 14px;

    .burguer {
      display: block;
    }
  }
`;
