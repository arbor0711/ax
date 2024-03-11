import { type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HeroImage from "../components/heroImage";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroImage />
      <main>
        <h1>Welcome to AX</h1>
        <p>A place for sharing my answers to your questions</p>
        <StaticImage
          className="ima"
          alt="Gatsby Image"
          src="../images/logo-dark.png"
        />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
