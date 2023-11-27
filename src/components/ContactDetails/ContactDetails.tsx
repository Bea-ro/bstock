import { ContactDetailsStyled } from './ContactDetailsStyled';
import { personalData } from '../../data/personalData';

const ContactDetails = () => {
  return (
    <ContactDetailsStyled>
      <div>
        <p>Teléfono</p>
        <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
      </div>
      <div>
        <p>Email</p>
        <a href={`mailto:${personalData.mail}`}>{personalData.mail}</a>
      </div>
    </ContactDetailsStyled>
  );
};

export default ContactDetails;
