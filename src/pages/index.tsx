import { Link, graphql, type PageProps } from "gatsby";
import * as React from "react";
import HeroImage from "../components/heroImage";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Posts from "../components/posts";
import Seo from "../components/seo";
import Portfolio from "../components/portfolio";
import ProjectCard from "../components/projectCard";
import DividerLine from "../components/dividerLine";
import AwesomeWebsites from "./../components/awesomeWebsites";
import GreetingCard from "../components/greeting";
import IntroductionCard from "../components/introduction";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <HeroImage />

      <Padding>
        <main>
          <section className="flex flex-col lg:flex-row gap-10 my-10">
            <GreetingCard />
            <IntroductionCard />
          </section>

          <section className="bg-bermuda my-10 py-10 flex flex-col justify-center">
            <h2 className="mb-10 text-center">Latest Posts</h2>
            <Posts data={data} />
            <Link to="/blog" className="btn btn-primary m-auto my-10">
              All Posts
            </Link>
          </section>

          <section className="h-64 flex justify-center m-auto">
            <AwesomeWebsites />
          </section>

          <section className="mb-10">
            <h2 className="">
              <DividerLine />
              Portfolio
            </h2>
            <div className="my-20 flex flex-col md:flex-row gap-5 justify-center">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className="text-center">
              <Link to="/" className="btn btn-primary btn-wide ">
                See All
              </Link>
            </div>
          </section>
        </main>
      </Padding>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;

export const postsQuery = graphql`
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
`;
