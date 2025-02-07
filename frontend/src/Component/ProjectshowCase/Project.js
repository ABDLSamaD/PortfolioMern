import Portfolio from "../../assets/portfolio.png";
import Cinet from "../../assets/cinet.png";
import Electrica from "../../assets/electrica.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A portfolio website to showcase my projects and skills.",
    image: Portfolio,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    details:
      "This is a personal portfolio website that showcases my projects and skills. It is built using React, Node.js, Express, and MongoDB.",
    liveUrl: "https://abdlsamad.github.io/Abdul_Samad/",
    githubUrl: "https://github.com/ABDLSamaD/Abdul_Samad",
    createdDate: "2024-10-10",
    features: ["Responsive Design", "Interactive UI", "Project Showcase"],
  },
  {
    id: 2,
    title: "Electrica",
    description:
      "A platform that helps you find the best electrician in your area and book an appointment.",
    image: Electrica,
    details:
      "Electrica is a platform that helps you find the best electrician in your area and book an appointment. It is built using React, Express.js, Node.js, and MongoDB.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
    liveUrl: "https://electrica-theta.vercel.app",
    githubUrl: "https://github.com/ABDLSamaD/Electrica",
    createdDate: "2024-7-27",
    features: [
      "User Authentication",
      "Session-Based Authentication",
      "Real-Time Booking",
      "User Reviews and Ratings",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Cine-t",
    description:
      "A movie recommendation app that helps you find the perfect movie to watch and buy tickets.",
    image: Cinet,
    details:
      "Cine-t is a movie recommendation app that helps you find the perfect movie to watch and buy tickets. It is built using React, Express.js, Node.js, and MongoDB.",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    liveUrl: "#/",
    githubUrl: "https://github.com/ABDLSamaD/Cinema-Ticket-Managment",
    createdDate: "2023-10-1",
    features: ["Movie Recommendations", "Ticket Booking", "User Reviews"],
  },
];

export default projects;
