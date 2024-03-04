import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  console.log("data:", data);
  return (
    <Layout pageTitle="My blog posts">
      <p> Choose what you want</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li>- {node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {
  <Seo title="My blog posts"></Seo>;
};

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;
