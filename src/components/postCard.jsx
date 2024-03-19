import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import TextShortener from "./textShortener";

const PostCard = ({ node }) => {
  const [showAll, setShowAll] = useState(false);
  const image = getImage(node.frontmatter.hero_image);

  return (
    <Link
      to={`/blog/${node.frontmatter.slug}`}
      onMouseOver={() => setShowAll(true)}
      onMouseLeave={() => setShowAll(false)}
    >
      <div className="relative  group w-72 rounded-2xl overflow-hidden">
        <div className="w-72 h-36 bg-navy  absolute bottom-0 group-hover:-bottom-8 group-hover:h-64 group-hover:z-10 duration-300  overflow-hidden">
          <article className="p-3 ">
            {showAll ? (
              <h3 className="text-gray-100 mb-0">{node.frontmatter.title}</h3>
            ) : (
              <h3 className="text-gray-100 mb-0">
                <TextShortener limit={40}>
                  {node.frontmatter.title}
                </TextShortener>
              </h3>
            )}

            <p className="text-gray-400 text-sm mb-3">
              {node.frontmatter.date}
            </p>
            <p className="hidden group-hover:inline text-gray-100">
              {node.excerpt}
            </p>
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
    </Link>
  );
};

export default PostCard;
