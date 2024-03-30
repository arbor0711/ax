import React, { useContext, useState } from "react";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Banner from "../components/portfolio/banner";
import ProjectCard from "../components/portfolio/projectCard";
import ProjectShowcase from "../components/portfolio/projectShowcase ";
import Statement from "../components/portfolio/statement ";
import { Project, projectsInfo } from "../data/data";
import { PortfolioContext } from "../hooks/portfolioContext";

const portfolio = () => {
  const value = useContext(PortfolioContext);
  console.log(value);

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
  // return (
  //   <div className="relative">
  //     {!visibility && (
  //       <Layout>
  //         <Banner />
  //         <main>
  //           <Padding>
  //             <Statement />
  //             <section className="m-20 flex flex-col">
  //               {/* <div className="flex gap-2">
  //                 <Button label="All Projects" />
  //                 <Button label="Web Development" />
  //                 <Button label="Web Design" />
  //               </div> */}
  //               <div className="flex flex-wrap gap-10 my-10">
  //                 {projectsInfo.map((project) => {
  //                   return (
  //                     <div key={project.id}>
  //                       <ProjectCard data={project} onClick={handleCallback} />
  //                     </div>
  //                   );
  //                 })}
  //               </div>
  //             </section>
  //           </Padding>
  //         </main>
  //       </Layout>
  //     )}
  //     {visibility && (
  //       <ProjectShowcase
  //         data={showcaseData}
  //         handleClose={onClose}
  //         handleFlipping={onFlip}
  //       />
  //     )}
  //   </div>
  // );
};

export default portfolio;
