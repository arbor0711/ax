import React from "react";
import { GrProjects } from "react-icons/gr";
import ButtonLink from "../buttonLink";
import ProjectCard from "./projectCard";

const ProjectsSection = ({ projectsInfo }) => {
  return (
    <section>
      <div className="my-20 flex flex-wrap flex-col md:flex-row gap-5 justify-center items-center">
        {projectsInfo.map((project) => (
          <ProjectCard data={project} />
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
  );
};

export default ProjectsSection;
