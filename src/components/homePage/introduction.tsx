import React from "react";
import DividerLine from "../dividerLine";
import { Link } from "gatsby";
import ButtonLink from "../buttonLink";
import { GrProjects } from "react-icons/gr";

const IntroductionCard = () => {
  return (
    <div className="p-10 lg:w-1/2 border rounded-lg mx-10">
      <DividerLine />
      <span className="mb-10">ABOUT ME</span>
      <h1>
        I develop and design websites with{" "}
        <span className="text-raspberry dark:text-raspberry ">purpose.</span>
      </h1>
      <p>
        I'm a full stack software engineer with a focus on frontend development.
        I also write and speak about web development, JavaScript libraries, and
        technology.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <Link to="/about" className="group btn mt-3 mb-5 z-0 ">
          More Info{" "}
          <span className="text-caterpillar dark:text-caterpillar">.</span>
          <span className="-translate-x-3 text-[#191E24] dark:text-[#191E24] group-hover:translate-x-0 group-hover:text-caterpillar transition-transform duration-1000 -z-10">
            .
          </span>
          <span className="-translate-x-6 text-[#191E24] dark:text-[#191E24] group-hover:translate-x-0.5 group-hover:text-caterpillar transition-transform duration-1000 -z-10">
            .
          </span>
        </Link>
        <ButtonLink
          href="/portfolio"
          label="Portfolio"
          iconAfter={<GrProjects color="#FFC700" />}
        />
      </div>
    </div>
  );
};

export default IntroductionCard;
