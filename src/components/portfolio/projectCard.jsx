import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { card, details } from "./projectCard.module.css";

const ProjectCard = ({ data }) => {
  const { title, slug, imgSrc, imgAlt, service } = data.node.frontmatter;
  return (
    <Link to={`/portfolio/${slug}`}>
      <div
        className={`${card} relative w-[320px] h-[240px] overflow-hidden group rounded-2xl cursor-pointer border-2`}
      >
        <div className="group-hover:translate-x-1/3 transition duration-700">
          <GatsbyImage
            image={getImage(imgSrc.childImageSharp)}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <article
          className={`${details} absolute top-0 left-0 w-3/4 h-full  origin-left p-5  bg-bg_bar`}
        >
          <h3 className="text-h3  text-gray-100">{title}</h3>
          <p className="text-texts text-gray-400">{service}</p>
        </article>
      </div>
    </Link>
  );
};

export default ProjectCard;
