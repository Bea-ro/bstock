import { styled } from 'styled-components';

export const ProjectsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 60px;

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    padding: 20px;
  }
`;
