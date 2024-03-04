import * as React from "react";
import NavBar from "./navBar";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <NavBar />
      <main className="p-5">
        <h1 className="">{pageTitle}</h1>
        {children}
      </main>
    </>
  );
};
export default Layout;
