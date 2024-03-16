import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Padding from "../../components/padding";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log(image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Padding>
        <p>{data.mdx.frontmatter.date}</p>
        <div className="rounded-xl overflow-hidden  my-10 size-2/3 mx-auto">
          <GatsbyImage
            className=""
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        </div>
        {children}
      </Padding>
    </Layout>
  );
};

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

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
