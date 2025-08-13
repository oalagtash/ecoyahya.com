import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'EcoYahya',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Lets KRAFT!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the Art of Digital Kraft.',
  name: 'EcoYahya ',
  subtitle: 'for Filmmaking Services',
  cta: 'Our Services',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello, Directed and produced by Yahya Al-Agtash, Ecoyahya The art of digital kraft,',
  paragraphTwo:
    ' specialize in full-service commercial and brand film production, bringing together the strategic vision of an advertising agency, the creative execution of a video production company, and the detailed craftsmanship of a post-production house. From my base in Amman, Jordan, I provide a seamless, one-stop solution to elevate your brand digital presence.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1GsceJCoycvnotONJiruirsg3ETP40an6/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
 {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SOCIAL VIDEO CONTENT',
    info: '',
    info2: '',
    videoId: 'Ty87Ck11VUU',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CORPORATE / PROJECT',
    info: '',
    info2: '',
    videoId: 'KyKx-Yn0Du8',
  },
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
  phone: '+962 799742464',
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
