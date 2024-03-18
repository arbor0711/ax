import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const PostCard = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image);
  console.log(image);
  return (
    <div className="relative  group w-72 rounded-2xl overflow-hidden">
      <div className="w-72 h-36 bg-navy absolute bottom-0 group-hover:-bottom-8 group-hover:h-64 group-hover:z-10 duration-300  overflow-hidden">
        <article className="p-3">
          <h3>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>Posted: {node.frontmatter.date}</p>
          <p className="hidden group-hover:inline">{node.excerpt}</p>
        </article>
      </div>
      <div className="w-72 h-72 group-hover:blur-lg duration-300  ">
        <GatsbyImage
          image={image}
          alt={node.frontmatter.hero_image_alt}
          className="w-72 h-40"
        />
      </div>
    </div>
  );
};

export default PostCard;
