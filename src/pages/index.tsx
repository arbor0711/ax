import { graphql, type PageProps } from "gatsby";
import * as React from "react";
import { GrArticle, GrProjects } from "react-icons/gr";

// import AwesomeWebsites from "../components/homePage/awesomeWebsites";
import GreetingCard from "../components/homePage/greeting";
import HeroImage from "../components/homePage/heroImage";
import IntroductionCard from "../components/homePage/introduction";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Posts from "../components/posts";
import Seo from "../components/seo";
import ButtonLink from "../components/buttonLink";

import ProjectShowcase from "../components/portfolio/projectShowcase ";
import { useState } from "react";
import { Project, projectsInfo } from "../data/data";
import ProjectCard from "../components/portfolio/projectCard";
import DividerLine from "../components/dividerLine";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  // NEW LINES
  const [visibility, setVisibility] = useState(false);
  const [showcaseData, setShowcaseData] = useState<Project>();
  const handleCallback = (data: Project) => {
    setVisibility(!visibility);
    setShowcaseData(data);
  };
  const onClose = () => {
    setVisibility(!visibility);
  };
  const onFlip = (id: number) => {
    const data = projectsInfo.find((project) => project.id === id);
    setShowcaseData(data);
  };
  console.log(visibility);
  // NEW LINES

  const projects = projectsInfo.slice(0, 3);

  return (
    <div className="relative">
      {visibility ? (
        // <div className="bg-white text-black text-6xl flex justify-center items-center">
        //   I am here
        // </div>
        <ProjectShowcase
          data={showcaseData}
          handleClose={onClose}
          handleFlipping={onFlip}
        />
      ) : (
        <Layout>
          <HeroImage />

          <Padding>
            <main>
              <section className="flex flex-col lg:flex-row gap-10 my-10 ">
                <GreetingCard />
                <IntroductionCard />
              </section>

              <section className="my-10 py-10 flex flex-col justify-center bg-gray-100 dark:bg-gray-900 -mx-20 px-20">
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
                <h2>
                  <DividerLine />
                  Portfolio
                </h2>
                <p className=" leading-9">
                  As part of my professional endeavors, I enjoy engaging in
                  various side projects that allow me to delve deeper into my
                  interests in design and development. I would be glad to share
                  some of my recent initiatives with you.
                </p>
                <div className="my-20 flex flex-wrap flex-col md:flex-row gap-5 justify-center items-center">
                  {projects.map((project) => (
                    <div key={project.id}>
                      <ProjectCard data={project} onClick={handleCallback} />
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
      )}
    </div>
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
