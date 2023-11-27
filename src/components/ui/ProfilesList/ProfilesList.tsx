import { ProfilesListStyled } from './ProfilesListStyled'
import { personalData } from '../../../data/personalData'

const ProfilesList = () => {
  return (
    <ProfilesListStyled>
      {personalData.profiles.map((profile) => (
        <li key={profile.name}>
          <a href={profile.link} target='blank' rel='noopener noreferrer'>
            <img src={profile.icon} alt={profile.name} />
          </a>
        </li>
      ))}
    </ProfilesListStyled>
  )
}

export default ProfilesList
