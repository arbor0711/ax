import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import Padding from "../../components/padding";
import Banner from "../../components/portfolio/banner";
// import ProjectCard from "../../components/portfolio/projectCard";
import ProjectShowcase from "../../components/portfolio/projectShowcase ";
import Statement from "../../components/portfolio/statement ";
// import { Project, projectsInfo } from "../../data/data";
import { Link } from "gatsby";

interface Project {
  id: number;
  slug: string;
  img: {
    src: string;
    alt: string;
  };
  imgSrc: string;
  title: string;
  address: string;
  type: Array<
    | "Portfolio Website"
    | "E-Learning Website"
    | "E-Commerce Website"
    | "Blogging Platform"
    | "Corporate Website"
    | "Landing Page"
    | "Social Networking Site"
    | "NGO Website"
  >;
  service: Array<
    "Graphic Design" | "Content Creation" | "Web Design" | "Web Development"
  >;
  condition: boolean;
  role: Array<"Developer" | "Designer">;
  testimonial?: {
    text: string;
    person: string;
    position: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query MyProjectsQuery {
      allMyProjectsJson {
        edges {
          node {
            id
            slug
            img {
              src
              alt
            }
            imgSrc
            title
            address
            type
            service
            condition
            role
            testimonial {
              text
              person
              position
              avatar {
                src
                alt
              }
            }
          }
        }
      }
    }
  `);
  const projectsInfo: [Project] = data.allMyProjectsJson.edges;
  console.log(projectsInfo);

  // const [visibility, setVisibility] = useState(false);
  // const [showcaseData, setShowcaseData] = useState<Project>();
  // const handleCallback = (data: Project) => {
  //   setVisibility(!visibility);
  //   setShowcaseData(data);
  // };
  // const onClose = () => {
  //   setVisibility(!visibility);
  // };
  // const onFlip = (id: number) => {
  //   const data = projectsInfo.find((project) => project.id === id);
  //   setShowcaseData(data);
  // };
  return (
    <div className="relative">
      {/* {!visibility && ( */}
      <Layout>
        <Banner />
        <main>
          <Padding>
            <Statement />
            <section className="m-20 flex flex-col">
              {/* <div className="flex gap-2">
                  <Button label="All Projects" />
                  <Button label="Web Development" />
                  <Button label="Web Design" />
                </div> */}
              {/* <div className="flex flex-wrap gap-10 my-10">
                  {projectsInfo.map((project) => {
                    return (
                      <div key={project.id}>
                        <Link to={`/portfolio/${project.slug}`}>
                          {project.title} */}
              {/* <ProjectCard
                            data={project}
                            onClick={handleCallback}
                    /> */}
              {/* </Link>
                      </div>
                    );
                  })}
                </div> */}
            </section>
          </Padding>
        </main>
      </Layout>
      {/* )} */}
      {/* {visibility && (
        // <div className="w-screen h-screen flex justify-center items-center">
        //   <ProjectShowcase
        //     data={showcaseData}
        //     handleClose={onClose}
        //     handleFlipping={onFlip}
        //   />
        // </div>
      )} */}
    </div>
  );
};

export default PortfolioPage;

// export const Head = () =>{
//   <Seo title="Portfolio" />
// }

// export const projectsQuery = graphql`
//   query {
//     allMyProjects {
//       nodes {
//
//           }
//         }
//       }
//     }
//   }
// `;
