export const social = {
  linkedin: 'https://www.linkedin.com/in/karim-krayem-838782181/',
  github: 'https://github.com/Kareem-Krayem',
  instagram: 'https://www.instagram.com/kareemkrayem.kk/',
  behance: 'https://www.behance.net/kareemkrayem',
};

export const home = {
  profile: require('../img/profile.png'),
  name: "Hi, I'm Karim",
  occupation: 'Frontend developer',
  description:
    'High level experience in UI/UX design and web development knowledge, producing quality work. Creating awesome projects from design to deploying.',
};

export const about = {
  myPicture: require('../img/about.PNG'),
  description:
    'Web developer, with extensive knowledge and years of experience. Working with UI/UX design and web technologies, delivering quality work.',
  yearsOfExperience: '03',
  completedProjects: '20',
  companiesWorked: '04',
  resume: require('../pdf/KarimKrayem-CV.pdf'),
};

export const skills = {
  frontend: {
    title: 'Frontend developer',
    experience: 3,
    icon: 'bx-code-curly',
    skills: [
      { name: 'HTML', percentage: '90%' },
      { name: 'CSS', percentage: '90%' },
      { name: 'JavaScript', percentage: '80%' },
      { name: 'React JS', percentage: '75%' },
    ],
  },
  backend: {
    title: 'Backend developer',
    experience: 2,
    icon: 'bx-server',
    skills: [
      { name: 'PHP', percentage: '80%' },
      { name: 'Python', percentage: '65%' },
      { name: 'Node JS', percentage: '60%' },
      { name: 'Firebase', percentage: '50%' },
    ],
  },
  designer: {
    title: 'Designer',
    experience: 1,
    icon: 'bx-palette',
    skills: [
      { name: 'Figma', percentage: '90%' },
      { name: 'Adobe XD', percentage: '85%' },
      { name: 'Sketch', percentage: '70%' },
    ],
  },
};

export const qualifications = {
  education: [
    {
      title: 'M.A Strategic Marketing',
      university: 'Berlin School of Business and Innovation',
      country: 'Germany',
      startDate: '2020',
      endDate: '2022',
    },
    {
      title: 'B.S. Computer Science',
      university: 'Lebanese International University',
      country: 'Lebanon',
      startDate: '2016',
      endDate: '2019',
    },
  ],
  work: [
    {
      title: 'Lead Developer',
      company: 'SunTec',
      country: 'Tripoli, Lebanon',
      startDate: '2021',
      endData: 'Present',
    },
    {
      title: 'Lead Designer & Developer',
      company: 'OGMA',
      country: 'Austin, U.S',
      startDate: '2019',
      endData: '2021',
    },
    {
      title: 'Web Developer',
      company: 'SITEG',
      country: 'Dubai, UAE',
      startDate: '2019',
      endData: '2019',
    },
    {
      title: 'Frontend Developer',
      company: 'Tecware',
      country: 'Tripoli, Lebanon',
      startDate: '2018',
      endData: '2019',
    },
  ],
};

export const services = {
  uiuxdesign: {
    title: 'UI/UX Designer',
    icon: 'bx-shape-square',
    description: [
      'High-fidelity Prototype',
      'Wireframes',
      'Mobile and Web User Interface Design',
      'Cross-Platform Compatibility',
      'Technical Design',
      'Software Redesign',
    ],
  },
  frontenddeveloper: {
    title: 'Frontend Developer',
    icon: 'bx-code',
    description: [
      'React JS Development',
      'Node JS Development',
      'Custom Web Apps',
      'Responsive development',
      'Fast development',
      'Scalablility',
      'Beautiful UI',
    ],
  },
  brandingdesign: {
    title: 'Digital Marketing',
    icon: 'bx-pencil',
    description: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'PPC Management',
      'eCommerce Marketing',
      'Email Marketing',
    ],
  },
};

export const portfolio = [
  {
    title: 'Web Design0',
    img: require('../../assets/img/portfolio1.jpg'),
    category: 'Web',
    url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  },
  {
    title: 'Web Design1',
    img: require('../../assets/img/portfolio2.jpg'),
    category: 'Mobile',
    url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  },
  {
    title: 'Web Design2',
    img: require('../../assets/img/portfolio3.jpg'),
    category: 'Design',
    url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  },
  {
    title: 'Web Design3',
    img: require('../../assets/img/portfolio1.jpg'),
    category: 'Web',
    url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  },
  {
    title: 'Web Design4',
    img: require('../../assets/img/portfolio1.jpg'),
    category: 'Web',
    url: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  },
  {
    title: 'Electric bike landing page',
    img: require('../../assets/img/landing-page-01.jpg'),
    category: 'Design',
    url: 'https://www.figma.com/file/OrFKK7U2Rirk6RY66Uxzgf/Landing-Page?node-id=2%3A2',
  },
];

export const contact = {
  email: 'kareemkrayem.w@gmail.com',
  location: 'Lebanon',
  messanger: 'kareemkrayem',
};

export const navLinks = [
  { link: 'home', icon: 'bx-home-alt' },
  { link: 'about', icon: 'bx-user' },
  { link: 'skills', icon: 'bx-bar-chart-alt-2' },
  { link: 'services', icon: 'bx-briefcase-alt-2' },
  { link: 'portfolio', icon: 'bx-image' },
  { link: 'contact', icon: 'bx-message-square-detail' },
];

const NavData = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
export const links = NavData;

export const container = document.getElementsByClassName('work__container');
export const cards = document.querySelectorAll('.work__card');
