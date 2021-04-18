import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yahya', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Lets KRAFT!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the Art of Digital Kraft.',
  name: 'EcoYahya ',
  subtitle: 'for Filmmaking Services',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello, I am Yahya, an independent film maker.',
  paragraphTwo:
    'I have accumulated a variety of experience that allows me to take your business to the next level in the area of digital presence',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/yahya-alagtash/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Dr. Dentist advices',
    info: '',
    info2: '',
    videoId: 'nlYlNF30bVg',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    videoId: 'SaGBWkACMJs',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    videoId: 'Czy4hhkQBXo',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};
