import React from "react";
import DividerLine from "../dividerLine";
import SvgCarousel from "./svgCarousel";

const SkillSet = () => {
  return (
    <section className="text-center my-10 ">
      <div className="flex justify-start items-baseline px-10 ">
        <DividerLine />
        <span className="text-h2">Tech Skills</span>
      </div>
      <p className=" px-10 text-left mb-10 max-w-[600px] mt-5">
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
