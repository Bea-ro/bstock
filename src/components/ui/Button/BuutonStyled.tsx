import styled from 'styled-components';

export const ButtonStyled = styled.a`
  border-radius: 3px;
  text-transform: uppercase;
  background-color: var(--color-yellow);
  color: black;
  font-weight: 700;
  font-size: 20px;
  padding: 12px 20px;
  width: fit-content;

  &:hover::after {
    content: '   >';
  }
`;
