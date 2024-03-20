import { Link } from "gatsby";
import React from "react";
import PrivacyPolicy from "./../pages/privacy-policy";

const Footer = () => {
  return (
    <footer className="p-10 bg-navy text-gray-400 flex flex-col justify-center  items-center gap-3">
      <div>Copyright © 2024. Alireza Keshavarz Shirazi</div>
      <div className="flex">
        <Link className="link link-hover" to="/privacy-policy">
          Privacy
        </Link>
        <span className="h-5 w-px bg-caterpillar rounded-lg  mx-5"></span>
        <Link className="link link-hover" to="/terms">
          Terms
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
