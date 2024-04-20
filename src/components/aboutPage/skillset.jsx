import React from "react";
import DividerLine from "../dividerLine";
import SvgCarousel from "./svgCarousel";

const SkillSet = () => {
  return (
    <section className="text-center my-10 ">
      <div className="flex items-center px-10">
        <DividerLine />
        <h2 className="text-h2 mb-3 ">Tech Skills</h2>
      </div>
      <p className=" px-10 text-left mb-10 max-w-[600px]">
        As a developer, I've worked with various frameworks, libraries, and
        tools to bring my projects to life. I'm a continuous learner who
        believes in expanding my toolset and exploring new technologies. Though
        I'm proud of my achievements, I'm always looking for ways to discover
        and master new tools.
      </p>
      <SvgCarousel />
    </section>
  );
};

export default SkillSet;
