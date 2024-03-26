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
    | "E-commerce Website"
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
    avatar: React.JSX.Element;
  };
}
export const projectsInfo: Project[] = [
  {
    id: 1,
    img: (
      <StaticImage
        src="../images/portfolio/912saakaar.com.png"
        alt="languages"
      />
    ),
    imgSrc: "../images/portfolio/912saakaar.com.png",
    title: "Sakar, a producer of specialized fast food spices",
    address: "912saakaar.com",
    type: ["Corporate Website"],
    service: ["Web Development"],
    condition: true,
    role: ["Developer"],
  },

  {
    id: 2,
    img: (
      <StaticImage src="../images/portfolio/atlas22.co.png" alt="languages" />
    ),
    imgSrc: "../images/portfolio/atlas22.co.png",
    title: "The Real Estate consultant Tehran/District 22",
    address: "atlas22.co",
    type: ["Corporate Website"],
    service: ["Web Development", "Web Design"],
    condition: true,
    role: ["Developer", "Designer"],
    testimonial: {
      text: "Working with Alireza was a game-changer for our real estate business in District 22, Tehran. In just four weeks, he crafted a stunning website that perfectly captured the essence of our properties and services. His swift and skillful development ensured we were up and running in no time. Thank you for your exceptional talent and dedication!",
      person: "Amir Sadeqi",
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
      <StaticImage src="../images/portfolio/behsoo.ir.png" alt="languages" />
    ),
    imgSrc: "../images/portfolio/behsoo.ir.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
    testimonial: {
      text: " ",
      person: "Arash Ashrafi",
      avatar: (
        <StaticImage
          src="../images/portfolio/amirSadeqi.jpg"
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
        alt="languages"
      />
    ),
    imgSrc: "../images/portfolio/elearningland.com.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
  },
  {
    id: 5,
    img: (
      <StaticImage
        src="../images/portfolio/nbpperfume.com.png"
        alt="languages"
      />
    ),
    imgSrc: "../images/portfolio/nbpperfume.com.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
  },
  {
    id: 6,
    img: (
      <StaticImage src="../images/portfolio/osouli.trade.png" alt="languages" />
    ),
    imgSrc: "../images/portfolio/osouli.trade.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
  },
  {
    id: 7,
    img: (
      <StaticImage src="../images/portfolio/tourholiday.png" alt="languages" />
    ),
    imgSrc: "../images/portfolio/tourholiday.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
  },
  {
    id: 8,
    img: (
      <StaticImage
        src="../images/portfolio/www.mehrafarinorg.com.png"
        alt="languages"
      />
    ),
    imgSrc: "../images/portfolio/www.mehrafarinorg.com.png",
    title: "project 1",
    address: "devscoops.com",
    type: ["NGO Website", "E-commerce Website"],
    service: ["Graphic Design", "Web Design"],
    condition: true,
    role: ["Designer"],
  },
];
