import React from "react";
import { Project } from "../../data/data";
import { card, details } from "./projectCard.module.css";

interface Props {
  // At the finish you should delete ? for type defining
  onClick?: (data: Project) => void;
  data: Project;
}
const ProjectCard = ({ onClick, data }: Props) => {
  const handleClick = () => {
    onClick!(data);
  };
  return (
    <div
      onClick={handleClick}
      className={`${card} relative w-72 h-72 bg-navy overflow-hidden group rounded-2xl cursor-pointer`}
    >
      <div className="group-hover:translate-x-1/3 transition duration-700">
        {data.img}
      </div>
      <article
        className={`${details} absolute top-0 left-0 w-3/4 h-full  origin-left p-5  bg-navy`}
      >
        <h1 className="text-xl  text-gray-100">{data.title}</h1>
        <p className="text-texts text-gray-400">{data.type}</p>
      </article>
    </div>
  );
};

export default ProjectCard;
