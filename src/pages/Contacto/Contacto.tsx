import { ContactoStyled } from './ContactoStyled';

import Title from '../../components/ui/Title/Title';
import PersonalCard from '../../components/PersonalCard/PersonalCard';

const Contacto = () => {
  return (
    <ContactoStyled>
      <Title text="Contáctame" size="40px" />
      <Title
        text="¡Tengo disponibilidad inmediata!"
        size="26px"
        color="var(--color-primary)"
        align="center"
      />
      <PersonalCard></PersonalCard>
    </ContactoStyled>
  );
};

export default Contacto;
