import { type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HeroImage from "../components/heroImage";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Padding from "../components/padding";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroImage />
      <Padding>
        <main>
          <h1>Welcome to AX</h1>
          <p>A place for sharing my answers to your questions</p>
          <StaticImage
            className="ima"
            alt="Gatsby Image"
            src="../images/logo-dark.png"
          />
        </main>
      </Padding>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
