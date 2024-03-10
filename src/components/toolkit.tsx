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
      <div>
        <div className="size-11 mx-auto">{skillSet.img}</div>
        <h3 className="my-5">{skillSet.segment}</h3>
        <Badges badges={skillSet.badges} />
      </div>
    </>
  );
};

export default Toolkit;
