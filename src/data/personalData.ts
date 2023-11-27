import { PersonalData } from '../types/personalData';

export const personalData: PersonalData = {
  name: 'Beatriz Rodríguez',
  image: '/personal-img.jpg',
  phone: '+34 678 20 70 35',
  mail: 'b_a_ro@hotmail.com',
  description:
    'Apasionada de la programación con amplia experiencia en Marketing. Deseando empezar a programar de forma profesional.',
  profiles: [
    {
      link: 'https://github.com/Bea-ro',
      icon: '/icons/github-icon-white.png',
      name: 'GitHub'
    },
    {
      link: 'https://linkedin.com/in/beatrizrodriguezmaya/',
      icon: '/icons/linkedin-icon.png',
      name: 'LinkedIn'
    },
    {
      link: 'https://developer-portfolio-brm.netlify.app/',
      icon: '/icons/portfolio-icon.png',
      name: 'Portfolio'
    }
  ],
  techs: [
    { icon: '/icons/html-icon.png', name: 'HTML5' },
    { icon: '/icons/css-icon.png', name: 'CSS3' },
    { icon: '/icons/js-icon.png', name: 'JavaScript' },
    { icon: '/icons/ts-icon.png', name: 'TypeScript' },
    { icon: '/icons/react-icon.png', name: 'React' },
    { icon: '/icons/next-icon.png', name: 'Next' },
    { icon: '/icons/vite-icon.png', name: 'Vite' },
    { icon: '/icons/vs-icon.png', name: 'VS Code' },
    { icon: '/icons/github-icon.png', name: 'Github' },
    { icon: '/icons/nodejs-icon.png', name: 'Node' },
    { icon: '/icons/express-icon.png', name: 'Express' },
    { icon: '/icons/mongodb-icon.png', name: 'MongoDB' }
  ]
};
