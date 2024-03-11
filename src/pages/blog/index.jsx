import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Posts from "../../components/posts";
import Padding from "./../../components/padding";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <Padding>
        <Posts data={data} />
      </Padding>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {
  <Seo title="My blog posts"></Seo>;
};

export const postsQuery = graphql`
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
