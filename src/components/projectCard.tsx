import { details, card } from "./projectCard.module.css";

import React from "react";

const ProjectCard = () => {
  return (
    <div
      className={`${card} relative w-72 h-72 bg-navy overflow-hidden group rounded-2xl`}
    >
      <div className="">
        <img
          className="group-hover:translate-x-1/3 transition duration-700"
          src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"
        />
      </div>
      <article
        className={`${details} absolute top-0 left-0 w-3/4 h-full  origin-left p-5  bg-navy`}
      >
        <h1 className="text-h1  text-gray-100">new project</h1>
        <p className="text-texts text-gray-400">
          Lorem ipsum is simple dummy text on.
        </p>
      </article>
    </div>
  );
};

export default ProjectCard;
