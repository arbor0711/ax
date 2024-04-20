import { graphql } from "gatsby";
import React from "react";
import AboutMe from "../components/aboutPage/aboutMe";
import SkillSet from "../components/aboutPage/SkillSet";
import Resume from "../components/aboutPage/resume";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Seo from "../components/seo";
import ProjectsSection from "./../components/portfolio/projectsSection";
import DividerLine from "../components/dividerLine";

const AboutPage = ({ data }: any) => {
  const projectsInfo = data.allMarkdownRemark.edges.slice(0, 3);

  return (
    <Layout pageTitle="About Me">
      <main>
        <Padding>
          <AboutMe />
        </Padding>

        <SkillSet />

        <Padding>
          <section className=" mb-16 ">
            <div className="flex justify-start items-baseline px-10 ">
              <DividerLine />
              <span className="text-h2">Portfolio</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <ProjectsSection projectsInfo={projectsInfo} />
            </div>
          </section>

          <Resume />
        </Padding>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About you" />;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          frontmatter {
            imgSrc {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            slug
            imgAlt
            service
          }
          id
        }
      }
    }
  }
`;
