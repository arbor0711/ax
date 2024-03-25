import React from "react";
import ProjectCard from "./projectCard";

const Portfolio = () => {
  return (
    <>
      <section className="mt-20 p-10   bg-base-300">
        <div className="flex justify-between align-middle ">
          <div className="flex  justify-center align-middle">
            <span className="relative  h-5 w-5 mr-5 m-auto">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 badge-success"></span>
            </span>

            <p className="font-bold text-success m-auto">I love all of them</p>
          </div>

          <div className="flex  justify-end ">
            <button className="btn btn-primary ml-5">All Projects</button>
            <button className="btn btn-primary ml-5">Websites</button>
            <button className="btn btn-primary ml-5">Design</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 my-10">
          {/* <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard /> */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
