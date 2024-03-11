import { Link } from "gatsby";
import React from "react";

const ProjectCard = () => {
  return (
    <Link
      to="/"
      className="w-72 h-72 bg-info flex justify-center border rounded-xl "
    >
      <h1 className="m-auto">ProjectCard</h1>
    </Link>
  );
};

export default ProjectCard;
