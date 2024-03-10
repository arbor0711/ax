import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface SkillSet {
  img: React.JSX.Element;
  segment: string;
  badges: string[];
}

export const toolkit: SkillSet[] = [
  {
    img: <StaticImage src="../images/testing.png" alt="" />,
    segment: "Test",
    badges: ["Cypress", "Jest", "c++", "Typescript", "Visual Basic"],
  },
  {
    img: <StaticImage src="../images/design.png" alt="" />,
    segment: "Language",
    badges: ["Javascript", "python", "c++", "Typescript", "Visual Basic"],
  },
  {
    img: <StaticImage src="../images/design.png" alt="" />,
    segment: "Languages",
    badges: ["Javascript", "python", "c++", "Typescript", "Visual Basic"],
  },
  {
    img: <StaticImage src="../images/design.png" alt="" />,
    segment: "Languag",
    badges: ["Javascript", "python", "c++", "Typescript", "Visual Basic"],
  },
  {
    img: <StaticImage src="../images/design.png" alt="" />,
    segment: "Lguages",
    badges: ["Javascript", "python", "c++", "Typescript", "Visual Basic"],
  },
];
