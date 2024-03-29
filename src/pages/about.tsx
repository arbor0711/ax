import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdNextPlan } from "react-icons/md";

import ButtonLink from "../components/buttonLink";
import Layout from "../components/layout";
import Padding from "../components/padding";
import ProjectCard from "../components/portfolio/projectCard";
import Seo from "../components/seo";
import Toolkit from "../components/toolkit";
import { projectsInfo, toolkit } from "../data/data";
import resume from "../data/resume.pdf";

const AboutPage = () => {
  const [page, setPage] = React.useState(1);

  return (
    <Layout pageTitle="About Me">
      <Padding>
        <main>
          <section className="flex flex-col items-center md:flex-row md:justify-between px-10">
            <div className="w-full md:w-2/4">
              <p>
                Hi. I am Alireza, a curious <strong>Frontend Engineer</strong>{" "}
                with a deep sense of ownership, driving me to go the extra mile
                in every project to ensure that every detail of the product
                backlog leads to outstanding sprint results. My proficiency in
                Next.js, React, and TypeScript enables me to take innovative
                approaches to achieve notable performance.
                <br />
                With over <strong>7 years</strong> of experience in frontend
                development and product design, I consistently promote the use
                of the newest technologies and strive to elevate standards in
                web accessibility and usability. I am a team player who
                collaborates effectively with cross-functional teams,
                appreciates knowledge sharing, and values continuous growth for
                all team members.
                <br />
                As a technology and gaming enthusiast, I believe I can deliver
                high-quality solutions that consistently meet and exceed project
                goals. My background in creating and implementing unit and
                integration tests ensures software reliability, and a strong
                proficiency in TypeScript enhances code quality and
                maintainability.
              </p>
              <div className="w-64">
                <ButtonLink
                  href="/contact"
                  label="Lets Work Together"
                  iconAfter={<FaArrowRightLong color="#FFC700" />}
                />
              </div>
            </div>

            <StaticImage
              className="float-right m-5  w-2/3 md:w-1/3 size-fit rounded-full"
              alt="Gatsby Image"
              src="../images/aboutMe.jpg"
            />
          </section>

          <section className="text-center my-10">
            <h2 className="text-h2 mt-h2t mb-h2b">Tech Skills</h2>
            <div className="flex  text-center flex-wrap justify-center ">
              {toolkit.map((skillSet) => (
                <div key={skillSet.segment} className=" m-5">
                  <Toolkit skillSet={skillSet} />
                </div>
              ))}
            </div>
          </section>

          <section className="text-center my-10">
            <h2 className="text-h2 mt-h2t mb-h2b">Portfolio</h2>
            <div className="flex flex-col md:flex-row justify-center items-center mb-5 gap-10">
              {projectsInfo.slice(0, 3).map((project) => (
                <div key={project.id}>
                  <ProjectCard data={project} />
                </div>
              ))}
            </div>
            <div className="mx-auto w-64">
              <ButtonLink
                href="/portfolio"
                label="See All Projects"
                iconAfter={<GrProjects color="#FFC700" />}
              />
            </div>
          </section>

          <section className="flex flex-col justify-center items-center">
            <h2 className="text-h2 mt-h2t mb-h2b">Resume</h2>

            <a
              className="group btn mb-5 w-64"
              href={resume}
              download="Alireza-Keshavarz-Shirazi-CV"
            >
              <span className="group-hover:translate-y-0.5 transition duration-300">
                <FaCloudDownloadAlt color="#FFC700" size={20} />
              </span>
              download
            </a>
            <div>
              {page === 1 && (
                <StaticImage src="../data/cv-page-1.png" alt="Resume Image" />
              )}
              {page === 2 && (
                <StaticImage src="../data/cv-page-2.png" alt="Resume Image" />
              )}
            </div>

            <div className="flex gap-5 mx-auto justify-center items-center mt-3 mb-10">
              <button
                className={`${
                  page === 1 && "cursor-not-allowed"
                }   btn-circle hover:-rotate-6`}
              >
                <MdNextPlan
                  size={40}
                  style={{ transform: "scaleX(-1)" }}
                  onClick={() => {
                    setPage(1);
                  }}
                />
              </button>
              Page {page} of 2
              <button
                className={`${
                  page === 2 && "cursor-not-allowed"
                }   btn-circle hover:-rotate-6`}
                onClick={() => {
                  setPage(2);
                }}
              >
                <MdNextPlan size={40} />
              </button>
            </div>
          </section>
        </main>
      </Padding>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About you" />;
