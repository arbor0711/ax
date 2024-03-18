import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        className="text-center text-5xl  font-sans font-extrabold flex flex-col justify-center align-middle"
        style={{ height: "80vh" }}
      >
        404 | Page Not Found
        <div className="w-80 mx-auto m-14">
          <StaticImage src="../images/404.png" alt="fall down ice-cream" />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
