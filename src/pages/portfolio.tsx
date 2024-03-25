import React, { useState } from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Banner from "../components/portfolio/banner";
import ProjectCard from "../components/portfolio/projectCard";
import ProjectShowcase from "../components/portfolio/projectShowcase ";
import Statement from "../components/portfolio/statement ";
import { Project, projectsInfo } from "../data/data";

const portfolio = () => {
  const [visibility, setVisibility] = useState(false);
  const [showcaseData, setShowcaseData] = useState<Project>();
  console.log(showcaseData);
  const handleCallback = (data: Project) => {
    setVisibility(!visibility);
    setShowcaseData(data);
    console.log(data);
  };
  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="relative">
      {!visibility && (
        <Layout>
          <Banner />

          <main>
            <Padding>
              <Statement />

              <section className="m-20 flex flex-col">
                <div className="flex gap-2">
                  <Button label="All Projects" />
                  <Button label="Web Development" />
                  <Button label="Web Design" />
                </div>
                <div className="flex flex-wrap gap-10 my-10">
                  {projectsInfo.map((project) => {
                    return (
                      <>
                        <ProjectCard data={project} onClick={handleCallback} />
                      </>
                    );
                  })}
                </div>
              </section>
            </Padding>
          </main>
        </Layout>
      )}
      {visibility && (
        <ProjectShowcase data={showcaseData} onClick={handleClick} />
      )}
    </div>
  );
};

export default portfolio;
