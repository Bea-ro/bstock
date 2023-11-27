import { PersonalCardStyled } from './PersonalCardStyled';
import { personalData } from '../../data/personalData';

const PersonalCard = () => {
  return (
    <PersonalCardStyled>
      <img src={personalData.image} alt={personalData.name} />
      <div className="personal-name-title">
        <p className="personal-description">{personalData.description}</p>
        <p className="personal-name">{personalData.name}</p>
        <p className="personal-title">Full Stack Developer Junior</p>
      </div>
    </PersonalCardStyled>
  );
};

export default PersonalCard;
