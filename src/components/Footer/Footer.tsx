import { FooterStyled } from './FooterStyled';

import Logo from '../Logo/Logo';
import ProfilesList from '../ui/ProfilesList/ProfilesList';
import ContactDetails from '../ContactDetails/ContactDetails';

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <Logo size="24px" color="var(--color-white)"></Logo>
        <ProfilesList></ProfilesList>
      </div>
      <ContactDetails></ContactDetails>
    </FooterStyled>
  );
};

export default Footer;
