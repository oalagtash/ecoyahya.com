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
  resume: 'https://drive.google.com/file/d/1TmqKF8zFPMxbiJ3fByc1Db-CFM-mYOxk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CORPORATE / PROJECT',
    info: '',
    info2: '',
    videoId: 'NNMRcYT1jKM',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'COMMERCIAL VIDEOS',
    info: '',
    info2: '',
    videoId: 'TjDG1uPB9M8',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SOCIAL VIDEO CONTENT',
    info: '',
    info2: '',
    videoId: 'ILY4oXOxinI',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  phone: '+962799742464',
  email: 'yalagtash@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCSp8IXahgZDT70bxUyepf4g',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ecoyahya/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yahya-alagtash/',
    },
  ],
};
