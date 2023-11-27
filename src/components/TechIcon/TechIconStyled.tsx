import { styled } from 'styled-components';

export const TechIconStyled = styled.li`
  img {
    max-height: 30px;
    max-width: 30px;
  }

  @media screen and (max-width: 730px) {
    max-height: 6px;
    max-width: 6px;
  }
`;
