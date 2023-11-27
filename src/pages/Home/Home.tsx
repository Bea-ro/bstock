import { HomeStyled } from './HomeStyled';
import { personalData } from '../../data/personalData';

import TechIcon from '../../components/TechIcon/TechIcon';
import Title from '../../components/ui/Title/Title';
import Logo from '../../components/Logo/Logo';
import Stack from '../../components/Stack/Stack';
import Skill from '../../components/Skill/skill';
import Button from '../../components/ui/Button/Button';

const Home = () => {
  return (
    <HomeStyled>
      <section className="introduction">
        <article className="main-intro">
          <div className="text-container">
            <Logo size="54px"></Logo>
            <p className="logo-text">Desarrollo + Marketing</p>
          </div>
          <h2 className="intro-description">
            De siempre marketiniana, ahora explorando y en ello, enganchada a la programación.
          </h2>
        </article>

        <article className="secondary-intro">
          <ul>
            <Stack
              title="Fronted Developer"
              text=" He desarrollado proyectos con HTML, CSS, JavaScript, TypeScript, Next y React y
    estoy empezando con Angular. Saco partido de hooks más allá de useState y
    useEffect y de librerías como React Hook Form y Styled Components. En términos
    marketinianos, el fronted es como el branding, packaging y merchandising del
    producto."
            ></Stack>
            <Stack
              title="Backedn Developer"
              text="  Llevo un año desarrollando APIs con Node, Express y MongoDB y voy a adentrarme en
    PostgreSQL. El backend es como la esencia y la calidad del producto."
            ></Stack>
          </ul>
        </article>
      </section>

      <section className="techs">
        <ul className="techs-list">
          {personalData.techs.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </ul>
      </section>

      <section className="skills">
        <ul className="skill-container">
          <Skill
            image="/buenas_practicas.png"
            alt="buenas-practicas-icon"
            title="Buenas prácticas"
            text="Me han insistido tanto en ello en el bootcamp que lo tengo interiorizado."
          ></Skill>
          <Skill
            image="/escalabilidad.png"
            alt="escalabilidad-icon"
            title="Escalabilidad"
            text="Que la app desarrollada sea escalable ha sido una de las premisas desde el comienzo."
          ></Skill>
          <Skill
            image="/ux.png"
            alt="ux-icon"
            title="UX"
            text="Todo funciona, pero ¿es cómodo e intuitivo para el usuario?"
          ></Skill>
          <Skill
            image="/refactoring.png"
            alt="refactoring-icon"
            title="Refactoring"
            text="No me conformo con que todo funcione. Busco el código más limpio y legible posible."
          ></Skill>
        </ul>
      </section>

      <section className="projects">
        <article className="projects-text">
          <Title text="Mis proyectos" size="36px" align="left" />
          <p>
            Puedes ver el código y el despliegue de los proyectos desarrollados durante mi
            formación. Desde una página web responsive utilizando CSS hasta una aplicaicón Full
            Stack utilizando Next, TypeScript, React y Styled Components, considerado el proyecto
            "Cum Laude" del bootcamp.
            <br />
            <br />
            En cada proyecto, he ido más allá de los requisitos para poner en práctica todo lo visto
            en clase. Además, desarrollé un proyecto más en pair programming por ininiciativa
            propia.
          </p>
          <Button text="ver más" href="/proyectos"></Button>
        </article>
        <aside className="projects-img-container">
          <img
            src="https://g-stock.es/wp-content/uploads/2022/09/gstock_app_dashboard_pedidos-1.png"
            alt=""
          />
        </aside>
      </section>
    </HomeStyled>
  );
};

export default Home;
