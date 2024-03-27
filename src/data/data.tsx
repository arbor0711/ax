import { StaticImage } from "gatsby-plugin-image";
import React from "react";

// Skill set
export interface SkillSet {
  img: React.JSX.Element;
  segment: string;
  badges: string[];
}

export const toolkit: SkillSet[] = [
  {
    img: <StaticImage src="../images/code.png" alt="languages" />,
    segment: "Language",
    badges: ["Javascript", "Typescript", "python"],
  },
  {
    img: <StaticImage src="../images/frontend.png" alt="front-end" />,
    segment: "Front-end",
    badges: [
      "React.js",
      "Next.js",
      "Gatsby.js",
      "Vue.js",
      "Vite",
      "jQuery",
      "CSS",
      "Sass",
      "Tailwind",
      "Chakra UI",
      "Bootstrap",
      "emotion",
    ],
  },
  {
    img: <StaticImage src="../images/design.png" alt="design" />,
    segment: "Design",
    badges: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Storybook",
    ],
  },
  {
    img: <StaticImage src="../images/backend.png" alt="back-end" />,
    segment: "Back-end & Data Management",
    badges: [
      "MongoDB",
      "Mongoose",
      "Postman",
      "MySQL",
      "Axios",
      "Prisma",
      "React Query",
      "Zustand",
      "MobX",
    ],
  },
  {
    img: <StaticImage src="../images/testing.png" alt="testing" />,
    segment: "Test",
    badges: [
      "Cross Device/Browser Testing",
      "Unit Test",
      "Integration Test",
      "Accessibility test",
      "Cypress",
      "Jest",
      "Vitest",
    ],
  },
  {
    img: <StaticImage src="../images/tools.png" alt="tools" />,
    segment: "Tools",
    badges: ["NPM", "Webpack", "git", "GitHub", "Vercel", "Netlify", "Heroku"],
  },
];

// Projects
export interface Project {
  id: number;
  img: React.JSX.Element;
  imgSrc: string;
  title: string;
  address: string;
  type: Array<
    | "Portfolio Website"
    | "E-Learning Website"
    | "E-Commerce Website"
    | "Blogging Platform"
    | "Corporate Website"
    | "Landing Page"
    | "Social Networking Site"
    | "NGO Website"
  >;
  service: Array<
    "Graphic Design" | "Content Creation" | "Web Design" | "Web Development"
  >;
  condition: boolean;
  role: Array<"Developer" | "Designer">;
  testimonial?: {
    text: string;
    person: string;
    position: string;
    avatar: React.JSX.Element;
  };
}
export const projectsInfo: Project[] = [
  {
    id: 1,
    img: (
      <StaticImage
        src="../images/portfolio/912saakaar.com.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/912saakaar.com.png",
    title: "Sakar, Specialized Fast Food Spices",
    address: "https://912saakaar.com/",
    type: ["Corporate Website"],
    service: ["Web Development"],
    condition: true,
    role: ["Developer"],
  },

  {
    id: 2,
    img: (
      <StaticImage
        src="../images/portfolio/atlas22.co.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/atlas22.co.png",
    title: "Atlas22 - Real Estate consultant",
    address: "https://atlas22.co/",
    type: ["Corporate Website"],
    service: ["Web Development", "Web Design"],
    condition: true,
    role: ["Developer", "Designer"],
    testimonial: {
      text: "Working with Alireza was a game-changer for our real estate business in District 22, Tehran. In just four weeks, he crafted a stunning website that perfectly captured the essence of our properties and services. His swift and skillful development ensured we were up and running in no time. Thank you for your exceptional talent and dedication!",
      person: "Amir Sadeqi",
      position: "CEO",
      avatar: (
        <StaticImage
          src="../images/portfolio/amirSadeqi.jpg"
          alt="Client avatar image."
        />
      ),
    },
  },
  {
    id: 3,
    img: (
      <StaticImage
        src="../images/portfolio/behsoo.ir.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/behsoo.ir.png",
    title: "Behsopuyan Technical and Trading Company",
    address: "https://behsoo.ir/",
    type: ["Corporate Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Developer", "Designer"],
    testimonial: {
      text: "I had the pleasure of collaborating with Alireza during our project with Atlas22, and I must say, it was an exceptional experience! Alireza's expertise in translating our architectural concepts into a dynamic and functional website was truly impressive. Throughout the project, Alireza demonstrated remarkable skill and professionalism, meticulously bringing our ideas to life while adding their own creative touch. He was always dedicated to understanding our vision and paid great attention to detail, ensuring that the final product exceeded our expectations.",
      person: "Arash Ashrafi",
      position: "ُSenior Manager",
      avatar: (
        <StaticImage
          src="../images/portfolio/arashAshrafi.jpg"
          alt="Client avatar image."
        />
      ),
    },
  },
  {
    id: 4,
    img: (
      <StaticImage
        src="../images/portfolio/elearningland.com.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/elearningland.com.png",
    title: "E-LEARNING LAND",
    address: "https://e-learningland.com/",
    type: ["E-Learning Website"],
    service: ["Web Design"],
    condition: true,
    role: ["Designer"],
  },
  {
    id: 5,
    img: (
      <StaticImage
        src="../images/portfolio/nbpperfume.com.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/nbpperfume.com.png",
    title: "Barin Parsian Carpenter Company",
    address: "https://nbp-perfume.com/",
    type: ["Corporate Website"],
    service: ["Web Development"],
    condition: true,
    role: ["Developer"],
  },
  {
    id: 6,
    img: (
      <StaticImage
        src="../images/portfolio/osouli.trade.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/osouli.trade.png",
    title: "Usoli Shojaei Trading & Shipping Companies",
    address: "https://osouli.trade/",
    type: ["Corporate Website"],
    service: ["Graphic Design", "Web Development", "Content Creation"],
    condition: true,
    role: ["Designer", "Developer"],
  },
  {
    id: 7,
    img: (
      <StaticImage
        src="../images/portfolio/www.mehrafarinorg.com.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/www.mehrafarinorg.com.png",
    title: "Mehr Afarin Charitatief Instituut",
    address: "https://mehrafarinorg.com/",
    type: ["NGO Website"],
    service: ["Graphic Design", "Web Design", "Web Development"],
    condition: true,
    role: ["Designer", "Developer"],
    testimonial: {
      text: "I am deeply moved by the incredible work that Mr Shirazi has done as our volunteer web designer and developer at Mehr Afarin. It is heartwarming to see how much he care about the children and mothers we serve, as he have worked tirelessly to ensure that our website effectively communicates our mission. Thanks to Mr Shirazi's amazing efforts, our online presence has become a powerful tool for spreading awareness and rallying support. Mr Shirazi is an invaluable team member, and we feel truly blessed to have him with us.",
      person: "Fatemeh Daneshvar",
      position: "Board Member",
      avatar: (
        <StaticImage
          src="../images/portfolio/fatemeDaneshvar.png"
          alt="Client avatar image."
        />
      ),
    },
  },
  {
    id: 8,
    img: (
      <StaticImage
        src="../images/portfolio/tourholiday.png"
        alt="website screen shot."
      />
    ),
    imgSrc: "../images/portfolio/tourholiday.png",
    title: "Online Travel Agency",
    address: "https://wensen.ir/",
    type: ["E-Commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: false,
    role: ["Developer", "Designer"],
  },
];
