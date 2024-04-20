import React from "react";
import ButtonLink from "../buttonLink";
import { FaArrowRightLong } from "react-icons/fa6";
import { StaticImage } from "gatsby-plugin-image";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center md:justify-between px-10">
      <div className=" md:flex ">
        <p className="">
          Hi. I am Alireza Keshavarz Shirazi, a curious web developer with a
          deep sense of ownership, driving me to go the extra mile in every
          project to ensure that every detail of the product backlog leads to
          outstanding sprint results. My proficiency in Next.js, React, and
          TypeScript enables me to take innovative approaches to achieve notable
          performance.
          <br />
          With over years of experience in frontend design and development, I
          consistently promote the use of the newest technologies and strive to
          elevate standards in web accessibility and usability. I am a team
          player who collaborates effectively with cross-functional teams,
          appreciates knowledge sharing, and values continuous growth for all
          team members.
          <br />
          As a technology and gaming enthusiast, I believe I can deliver
          high-quality solutions that consistently meet and exceed project
          goals. My background in creating and implementing unit and integration
          tests ensures software reliability, and a strong proficiency in
          TypeScript enhances code quality and maintainability.
        </p>
        <StaticImage
          className=" mt-10 float-right md:float-none md:ml-5 md:my-auto   min-h-[300px] min-w-[300px]    size-fit  rounded-3xl md:rounded-full"
          alt="Alireza Keshavarz Shirazi"
          src="../../images/aboutMe.jpg"
        />
      </div>
      <div className="w-64 mt-10">
        <ButtonLink
          href="/contact"
          label="Lets Work Together"
          iconAfter={<FaArrowRightLong color="#FFC700" />}
        />
      </div>
    </section>
  );
};

export default AboutMe;
