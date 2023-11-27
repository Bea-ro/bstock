import styled from 'styled-components';

export const SkillStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
  max-width: 60%;
  span {
    height: 62px;
    width: 62px;
    align-self: center;
  }

  > span > img {
    max-height: 100%;
    max-width: 100%;
  }

  h3 {
    color: var(--color-secondary);
  }

  p {
    color: var(--color-white);
  }
`;
