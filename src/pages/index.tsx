import { Link, graphql, type PageProps } from "gatsby";
import * as React from "react";
import DividerLine from "../components/dividerLine";
import { GrProjects, GrArticle } from "react-icons/gr";

// import AwesomeWebsites from "../components/homePage/awesomeWebsites";
import GreetingCard from "../components/homePage/greeting";
import HeroImage from "../components/homePage/heroImage";
import IntroductionCard from "../components/homePage/introduction";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Posts from "../components/posts";
import ProjectCard from "../components/portfolio/projectCard";
import Seo from "../components/seo";
import ButtonLink from "../components/buttonLink";
import { projectsInfo } from "../data/data";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const projects = projectsInfo.slice(0, 3);
  return (
    <Layout>
      <HeroImage />

      <Padding>
        <main>
          <section className="flex flex-col lg:flex-row gap-10 my-10 ">
            <GreetingCard />
            <IntroductionCard />
          </section>

          <section className="my-10 py-10 flex flex-col justify-center">
            <h2 className="mb-10 text-center">Latest Posts</h2>
            <Posts data={data} />
            <div className="mx-auto w-64">
              <ButtonLink
                href="/blog"
                label="Explore All Posts "
                iconAfter={<GrArticle color="#FFC700" />}
              />
            </div>
          </section>

          <section className="h-64 flex justify-center m-auto">
            {/* <AwesomeWebsites /> */}
          </section>

          <section className="mb-10">
            <h2 className="">
              <DividerLine />
              Portfolio
            </h2>
            <div className="my-20 flex flex-col md:flex-row gap-5 justify-center items-center">
              {projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard data={project} />
                </div>
              ))}
            </div>
            <div className="text-center w-64 mx-auto">
              <ButtonLink
                href="/portfolio"
                label="Explore All Projects"
                iconAfter={<GrProjects color="#FFC700" />}
              />
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
