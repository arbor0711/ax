import * as React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface Props {
  children?: React.ReactNode;
}

const Padding: React.FC<Props> = ({ children }) => {
  return <div className="px-5">{children}</div>;
};
export default Padding;
