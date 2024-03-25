import { Link } from "gatsby";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  iconBefore?: any;
  iconAfter?: any;
}
const Button = ({ label, iconBefore, iconAfter }: Props) => {
  return (
    <button className="group btn mt-3 mb-5 flex justify-center items-center">
      <span className="group-hover:-translate-y-1 transition duration-3000">
        {iconBefore}
      </span>
      {label}
      <span className="group-hover:translate-x-1 transition duration-3000">
        {iconAfter}
      </span>
    </button>
  );
};

export default Button;
