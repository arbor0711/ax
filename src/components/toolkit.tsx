import React from "react";
import Badges from "./badges";
import { SkillSet } from "../data/data";

interface Props {
  skillSet: SkillSet;
}

const Toolkit = ({ skillSet }: Props) => {
  return (
    <>
      <div className="border-2 dark:border-gray-900 rounded-xl p-5 h-56">
        <div className="size-11 mx-auto">{skillSet.img}</div>
        <h3 className="mt-1 mb-h3b">{skillSet.segment}</h3>
        <Badges badges={skillSet.badges} />
      </div>
    </>
  );
};

export default Toolkit;
