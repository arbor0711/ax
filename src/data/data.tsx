import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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
