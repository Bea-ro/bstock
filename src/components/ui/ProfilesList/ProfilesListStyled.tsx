import { styled } from 'styled-components';

export const ProfilesListStyled = styled.ul`
  display: flex;
  padding: 8px 6px;
  gap: 16px;

  a {
    font-size: 14px;
    font-weight: 500;
  }

  img {
    height: 25px;
    transition: transform 0.3s ease;
  }
  img:hover {
    animation: pulse 0.4s infinite alternate;
  }
`;
