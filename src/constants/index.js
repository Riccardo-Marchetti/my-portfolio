import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  spring,
  git,
  cinema,
  linkedin,
  intesa,
  postgreSQL,
  java,
  sass,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "competenze",
    title: "Competenze",
  },
  {
    id: "progetti",
    title: "Progetti",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: creator,
  },
  {
    title: "Back-end Developer",
    icon: mobile,
  },
  {
    title: "Responsive Design",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [{}, {}, {}, {}];

const testimonials = [{}, {}, {}];

const projects = [
  {
    name: "Dream Cinema",
    description:
      "Questa app, sviluppata per il mio progetto Capstone di Epicode, gestisce una catena di cinema. Permette agli utenti di esplorare film, aggiungere recensioni, prenotare biglietti e visualizzare le loro prenotazioni nel profilo.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },

      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: cinema,
    source_code_Link: "https://github.com/Riccardo-Marchetti/Capstone_project",
  },
  {
    name: "Linkedin Clone",
    description:
      "Questo è il progetto finale della parte front-end del corso. Insieme al mio team, abbiamo creato un clone di Linkedin, implementando molte delle funzionalità CRUD utilizzando le API fornite dal corso. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
    ],
    image: linkedin,
    source_code_Link: "https://github.com/kaem0n/epicode-BW3-Team6",
  },
  {
    name: "Intesa Vincente",
    description:
      "Cerchi un modo divertente per passare il tempo con gli amici? Ho la soluzione: In questo progetto, ho ricreato il famoso gioco televisivo. Il gioco è funzionante, ma sto aggiungendo nuove funzionalità.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    image: intesa,
    source_code_Link: "https://github.com/Riccardo-Marchetti/Intesa-Vincente",
  },
];

export { services, technologies, experiences, testimonials, projects };
