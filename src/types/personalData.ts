import { Tech } from './tech'

export type PersonalData = {
  name: string
  image: string
  phone: string
  mail: string
  description: string
  profiles: {
    link: string
    name: string
    icon: string
  }[]
  techs: Tech[]
}
