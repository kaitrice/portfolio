import {
  faReact,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faNodeJs,
  faAngular,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faServer
} from '@fortawesome/free-solid-svg-icons'

import wwxsImage from './assets/projects/project1.jpg'
import panicPalImage from './assets/projects/project2.jpg'
import deadwoodImage from './assets/projects/project3.jpg'
import colorImage from './assets/projects/project4.jpg'
import portfolioImage from './assets/projects/project5.jpg'

export const technologies = [
  // languages
  {
    icon: faJava,
    title: 'Java'
  },
  {
    icon: faJs,
    title: 'JavaScript'
  },
  {
    icon: faHtml5,
    title: 'HTML'
  },
  {
    icon: faCss3,
    title: 'CSS'
  },
  {
    icon: faDatabase,
    title: 'SQL'
  },
  // frameworks & libraries
  {
    icon: faReact,
    title: 'React'
  },
  {
    icon: faAngular,
    title: 'Angular'
  },
  {
    icon: faReact,
    title: 'React Native'
  },
  {
    icon: faNodeJs,
    title: 'Node'
  },
  {
    icon: faBootstrap,
    title: 'Bootstrap'
  },
  {
    icon: faDatabase,
    title: 'Sequelize'
  },
  {
    icon: faReact,
    title: 'Express'
  },
  {
    icon: faServer,
    title: 'Expo'
  },
]

export const projects = [
  {
    title: 'Personal Portfolio',
    technologies: ['React','Bootstrap','Github'],
    date: 'June 2024',
    badge: 'New',
    badgeType: 'primary',
    description:
      'Modern and professional portfolio website to showcase personal skills, projects, and achievements serving as a digital resume and highlights my abilities in web and app development and user experience design.',
    image: portfolioImage,
    codeLink: 'https://github.com/kaitrice/portfolio',
    projectLink: '',
  },
  {
    title: 'Water Weather Station',
    technologies: ['Angular', 'Node', 'PostgreSQL'],
    date: 'December 2023',
    badge: 'Legacy',
    badgeType: 'dark',
    description:
      'IoT project involving a buoy device for real-time water data collection, a mobile app for data retrieval and uploading via APIs, and a responsive web UI and REST API for data management and visualization.',
    image: wwxsImage,
    codeLink: 'https://github.com/GearyER/WWXS',
    projectLink: 'https://seadc-waterweatherstation.cyberrangepoulsbo.com/',
  },
  {
    title: 'Panic Pal',
    technologies: ['React Native', 'Expo'],
    date: 'December 2023',
    badge: 'Legacy',
    badgeType: 'dark',
    description:
      'Mobile app aiming to provide support for individuals experiencing panic attacks. Using OpenAI powered chatbot designed to offer empathetic and supportive conversations to help manage panic attacks effectively.',
    image: panicPalImage,
    codeLink: 'https://github.com/kaitrice/panic-pal',
    projectLink: 'https://youtu.be/Ueqlpl4Sl4U',
  },
  {
    title: 'Deadwood',
    technologies: ['Java', 'Java Swing'],
    date: 'June 2023',
    badge: 'Legacy',
    badgeType: 'dark',
    description:
      'Digital version of the board game "Deadwood" using a GUI toolkit for Java applications. The project focuses on applying Object-Oriented Design (OOD) principles to create a robust and interactive game environment.',
    image: deadwoodImage,
    codeLink: 'https://github.com/kaitrice/deadwood',
    projectLink: '',
  },
  {
    title: 'Guess the Color',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    date: 'December 2022',
    badge: 'Legacy',
    badgeType: 'dark',
    description:
      'Educational game designed to help students learn and understand color codes, such as RGB and Hexadecimal, commonly used in web development. The project is implemented using a client-server architecture.',
    image: colorImage,
    codeLink: 'https://github.com/kaitrice/guess-the-color',
    projectLink: '',
  },
]
