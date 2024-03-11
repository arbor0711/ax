import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link } from "gatsby";

import { graphql } from "gatsby";
import Padding from "./../../components/padding";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <Padding>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <br />
          </article>
        ))}
      </Padding>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {
  <Seo title="My blog posts"></Seo>;
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
