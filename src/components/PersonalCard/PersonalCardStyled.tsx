import { styled } from 'styled-components';

export const PersonalCardStyled = styled.div`
  border: 1px solid var(--color-white);
  box-shadow: 1px 2px 18px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  max-width: 50%;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin: 30px;
    height: 90px;
    width: 90px;
  }

  .personal-description {
    font-size: 14px;
    padding: 20px 0;
    line-height: 1.4em;
  }

  .personal-name-title {
    padding: 30px 30px 30px 0px;
  }

  .personal-name {
    font-size: 16px;
    color: black;
    text-transform: uppercase;
  }

  .personal-title {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-secondary);
    padding-top: 6px;
  }
`;
