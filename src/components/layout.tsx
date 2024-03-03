import { HeadFC, Link } from "gatsby";
import * as React from "react";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  </>
);
export default Layout;
