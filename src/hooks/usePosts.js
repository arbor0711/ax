import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
          excerpt
        }
      }
    }
  `);
};

export default usePosts;
