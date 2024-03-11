import * as React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
