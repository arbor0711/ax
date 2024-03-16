import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const PostCard = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image);
  console.log(image);
  return (
    <div className="relative  group w-72">
      <div className="w-72 h-32 bg-navy absolute bottom-0 group-hover:-bottom-8 group-hover:h-64 duration-300 rounded-2xl z-10 overflow-hidden">
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
      <div className="w-72 h-72 bg-caterpillar rounded-3xl group-hover:blur-lg duration-500 -z-10">
        <GatsbyImage image={image} alt={node.frontmatter.hero_image_alt} />
      </div>
    </div>
  );
};

export default PostCard;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
