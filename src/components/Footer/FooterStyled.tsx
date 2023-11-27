import { styled } from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 30px;

  @media screen and (max-width: 567px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
