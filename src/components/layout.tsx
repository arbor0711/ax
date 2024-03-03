import { HeadFC, Link } from "gatsby";
import * as React from "react";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => (
  <>
    {/* <nav className="bg-gray-800 py-4">
      <ul className="row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav> */}
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">
              aX
            </a>
          </div>
          <div className="hidden md:block">
            <a href="/" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white px-3 py-2"
            >
              About
            </a>
            <a
              href="/blogs"
              className="text-gray-300 hover:text-white px-3 py-2"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  </>
);
export default Layout;
