import React from "react";
import Badges from "./badges";
import { SkillSet } from "../data/data";

interface Props {
  skillSet: SkillSet;
}

const Toolkit = ({ skillSet }: Props) => {
  const image = skillSet.img;
  return (
    <>
      <div className="border-2   rounded-xl p-5 transition duration-500 h-56">
        <div className="size-11 mx-auto ">{skillSet.img}</div>
        <h3 className="mt-1 mb-h3b dark:text-caterpillar">
          {skillSet.segment}
        </h3>
        <Badges badges={skillSet.badges} />
      </div>
    </>
  );
};

export default Toolkit;
