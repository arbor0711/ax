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

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <HeroImage />

      <Padding>
        <main>
          <section className="flex flex-col lg:flex-row gap-10 my-10">
            <article className="p-10 lg:w-1/2">
              <h1> Welcome and thanks for stopping by.</h1>
              <p>
                I hope you enjoy exploring this site as much as I've enjoyed
                building it. While you're here, you can check out my blog posts
                and courses, see my talks and interviews, learn more about me,
                or get in touch.
              </p>
            </article>
            <div className="p-10 lg:w-1/2 border rounded-lg">
              <DividerLine />
              <span className="mb-10">ABOUT ME</span>
              <h1>
                I develop and design websites with{" "}
                <span className="text-primary">purpose.</span>
              </h1>
              <p>
                I'm a full stack software engineer with a focus on frontend
                development. I also write and speak about web development,
                JavaScript, and technology.
              </p>
              <div className="flex gap-5 my-10">
                <Link className="btn btn-primary" to="/">
                  ABOUT ME
                </Link>
                <Link className="btn btn-primary" to="/">
                  MY PROFILE
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-bermuda my-10 py-10 flex flex-col justify-center">
            <h2 className="mb-10 text-center">Latest Posts</h2>
            <Posts data={data} />
            <Link to="/blog" className="btn btn-primary m-auto my-10">
              All Posts
            </Link>
          </section>

          <section className="h-64 flex justify-center m-auto">
            <p className="font-extrabold text-7xl m-auto">AWESOME ANIMATION</p>
          </section>

          <section className="mb-10">
            <span className="">---Portfolio</span>
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
