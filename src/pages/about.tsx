import { PageProps, HeadFC, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          laudantium harum eligendi repudiandae, sint illo, id ut odio repellat
          praesentium officiis doloremque accusantium blanditiis eum. Doloribus
          cupiditate nobis temporibus maiores!
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About you" />;
