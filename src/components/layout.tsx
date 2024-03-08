import * as React from "react";
import NavBar from "./navBar";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <div className="relative bg-bermuda">
      <NavBar />
      <main className="p-5 h-full">
        <h1 className="">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
