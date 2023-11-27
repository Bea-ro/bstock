import { styled } from 'styled-components'

export const ProjectCardStyled = styled.li`
  border: 1px solid var(--color-white);
  box-shadow: 1px 2px 18px 0px rgba(0, 0, 0, 0.3);
  padding-bottom: 20px;

  img {
    height: 60%;
    width: 100%;
  }

  .project-name-link {
    padding: 30px 40px 10px 40px;
    height: 55%;
  }

  .project-name {
    font-size: 16px;
    color: black;
    text-transform: uppercase;
  }

  .project-link {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-secondary);
  }
`
