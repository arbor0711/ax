import { HeadFC, Link } from "gatsby";
import * as React from "react";
import NavBar from "./navbar";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => (
  <>
    <NavBar />
    <main className="p-5">
      <h1 className="">{pageTitle}</h1>
      {children}
    </main>
  </>
);
export default Layout;
