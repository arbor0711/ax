import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Padding from "../../components/padding";
import Banner from "../../components/portfolio/banner";
import ProjectCard from "../../components/portfolio/projectCard";
import Statement from "../../components/portfolio/statement ";

//TODO: This is JSX
// export interface Project {
//   node: {
//     id: number;
//     slug: string;
//     img: {
//       src: string;
//       alt: string;
//     };
//     imgSrc: string;
//     title: string;
//     address: string;
//     type: Array<
//       | "Portfolio Website"
//       | "E-Learning Website"
//       | "E-Commerce Website"
//       | "Blogging Platform"
//       | "Corporate Website"
//       | "Landing Page"
//       | "Social Networking Site"
//       | "NGO Website"
//     >;
//     service: Array<
//       "Graphic Design" | "Content Creation" | "Web Design" | "Web Development"
//     >;
//     condition: boolean;
//     role: Array<"Developer" | "Designer">;
//     testimonial?: {
//       text: string;
//       person: string;
//       position: string;
//       avatar: {
//         src: string;
//         alt: string;
//       };
//     };
//   };
// }

// const Wrapper = ({ children, data }) => {
//   const image = getImage(data.frontmatter.imgSrc);
//   return (
//     <div>
//       <GatsbyImage className="h-[100px] " image={image} alt={"some text"} />
//       {children}
//     </div>
//   );
// };

const PortfolioPage = ({ data }) => {
  const projectsInfo = data.allMarkdownRemark.edges;
  console.log(projectsInfo);

  return (
    <Layout>
      <Banner />
      <main>
        <Padding>
          <Statement />
          <section className="m-20 flex flex-col">
            <div className=" py-10 bg-[url('../images/bg-gradient-portfolio-vertical.png')] md:bg-[url('../images/bg-gradient-portfolio.png')] bg-fixed bg-no-repeat bg-opacity-40 bg-center bg-blend-screen ">
              <h2 className="text-h2 text-center mb-10 md:mb-16">Projects</h2>
              <div className="flex flex-wrap items-center justify-center gap-10 ">
                {projectsInfo.map((project) => (
                  <ProjectCard data={project} />
                ))}
              </div>
            </div>
          </section>
        </Padding>
      </main>
    </Layout>
  );
};

export default PortfolioPage;

// export const Head = () =>{
//   <Seo title="Portfolio" />
// }

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
