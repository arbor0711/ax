import { Link } from "gatsby";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  download?: string;
  href: string;
  label: string;
  iconBefore?: any;
  iconAfter?: any;
}
const ButtonLink = ({
  href,
  label,
  iconBefore,
  iconAfter,
  download,
}: Props) => {
  return (
    <Link
      to={href}
      className="group btn mt-3 mb-5 m-auto flex justify-center items-center"
      download={download}
    >
      <span className="group-hover:-translate-y-1 transition duration-3000">
        {iconBefore}
      </span>
      {label}
      <span className="group-hover:translate-x-1 transition duration-3000">
        {iconAfter}
      </span>
    </Link>
  );
};

export default ButtonLink;
