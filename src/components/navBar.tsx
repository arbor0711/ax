import { Link } from "gatsby";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              aX
            </Link>
          </div>
          <div className="hidden md:block">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
