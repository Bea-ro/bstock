import { styled } from 'styled-components';

export const HomeStyled = styled.main`
  @keyframes moveImages {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .introduction {
    background-color: var(--color-secondary);
    display: flex;
    gap: 30px;
    padding: 80px 100px;
  }

  .text-container {
    position: relative;
  }

  .logo-text {
    color: var(--color-primary);
    font-size: 14px;
    margin-left: 2px;
    position: absolute;
    bottom: -4px;
  }

  .intro-description {
    color: var(--color-grey);
    font-weight: 700;
    font-size: 30px;
  }

  .main-intro {
    display: flex;
    flex-direction: column;
    gap: 46px;
    max-width: 50vw;
  }

  .secondary-intro {
    color: var(--color-primary);
    max-width: 50vw;
  }

  .techs-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 40px 0;
    animation: moveImages 12s linear infinite;
    max-width: 100%;
  }

  .skills {
    background-color: var(--color-primary);
    padding: 40px;
    display: flex;
    justify-content: center;
  }

  .skill-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 50px;
    max-width: 80%;
  }

  .projects {
    display: flex;
    justify-content: space-around;
    background-color: var(--color-grey-secondary);
  }

  .projects-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    max-width: 30%;
    p {
      font-size: 16px;
      line-height: 1.5em;
    }
  }

  .projects-img-container {
    max-width: 60%;
    img {
      max-height: 421px;
    }
  }

  @media screen and (max-width: 730px) {
    .introduction {
      flex-direction: column;
      padding: 30px;
    }
    aside {
      display: none;
    }
    .skill-container {
      grid-template-columns: 1fr;
      max-width: 100%;
    }

    .projects {
      display: block;
    }

    .projects-text {
      max-width: 60%;
    }
  }
`;
