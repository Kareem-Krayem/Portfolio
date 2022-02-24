export const social = {
  linkedin:
    'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  github:
    'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  instagram:
    'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
  behance:
    'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjnvLTawpX2AhUJ2aQKHQfhA6IQPAgI',
};

export const home = {
  profile: require('../img/profile.png'),
  name: "Hi, I'm Karim",
  occupation: 'Frontend developer',
  description:
    'High level experience in web design and development knowledge, producing quality work.',
};

export const about = {
  myPicture: require('../img/about.PNG'),
  description:
    'Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.',
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
      { name: 'CSS', percentage: '80%' },
      { name: 'JavaScript', percentage: '65%' },
      { name: 'React JS', percentage: '75%' },
    ],
  },
  backend: {
    title: 'Backend developer',
    experience: 2,
    icon: 'bx-server',
    skills: [
      { name: 'PHP', percentage: '80%' },
      { name: 'Node JS', percentage: '50%' },
      { name: 'Firebase', percentage: '60%' },
      { name: 'Python', percentage: '80%' },
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
      endDate: 'Present',
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

export const services = [
  { title: 'UI/UX Designer', icon: 'bx-shape-square' },
  { title: 'Frontend Developer', icon: 'bx-code' },
  { title: 'Branding Designer', icon: 'bx-pencil' },
];

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
];

export const contact = {
  email: 'kareemkrayem.w@gmail.com',
  phone: '+96171848214',
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
