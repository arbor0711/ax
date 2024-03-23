import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Padding from "./padding";
import ProjectCard from "./projectCard";

const Portfolio = () => {
  return (
    <>
      <header className="bg-[url('../images/portfolio.gif')] h-96 flex flex-col justify-center ">
        <h1 className="text-7xl mx-auto text-bermuda">
          <span className="text-[rgb(255,64,64)]">P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span className="text-[rgb(5,179,156)]">f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
          <span className="animate-colorful-text bg-gradient-to-r from-primary via-accent to-error bg-clip-text text-transparent">
            !
          </span>
        </h1>
      </header>
      <main>
        <Padding>
          <article className=" -my-10 bg-primary p-10 rounded-xl border-1 border-bermuda">
            <p>
              I love THIS! I’m proud of the relationships I’ve built with my
              colleagues and customers, as well as the websites and applications
              we’ve built together. My goal is to make life easier for all
              people who engage with my works through user-centric design and
              efficient development.
            </p>
          </article>

          <section className="mt-20 p-10   bg-base-300">
            <div className="flex justify-between align-middle ">
              <div className="flex  justify-center align-middle">
                <span className="relative  h-5 w-5 mr-5 m-auto">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 badge-success"></span>
                </span>

                <p className="font-bold text-success m-auto">
                  I love all of them
                </p>
              </div>

              <div className="flex  justify-end ">
                <button className="btn btn-primary ml-5">All Projects</button>
                <button className="btn btn-primary ml-5">Websites</button>
                <button className="btn btn-primary ml-5">Design</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 my-10">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </section>
        </Padding>
      </main>
    </>
  );
};

export default Portfolio;
