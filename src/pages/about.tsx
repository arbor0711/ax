import { graphql } from "gatsby";
import React from "react";
import AboutMe from "../components/aboutPage/aboutMe";
import SkillSet from "../components/aboutPage/SkillSet";
import Resume from "../components/aboutPage/resume";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Seo from "../components/seo";
import ProjectsSection from "./../components/portfolio/projectsSection";

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
          <section className="flex flex-col justify-center items-center mb-16 ">
            <h2>Portfolio</h2>
            <ProjectsSection projectsInfo={projectsInfo} />
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
