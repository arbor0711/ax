import React from "react";
import { IoHeartCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <header className="font-serif bg-[url('../images/portfolio.gif')] h-96 dark:invert bg-white py-10 flex flex-col justify-center items-center bg-fixed ">
      <span className=" font-black text-lg md:text-3xl dark:invert mb-5 italic">
        Turning Coffee into Code
      </span>
      <h1 className="text-5xl md:text-7xl mx-auto leading-tight dark:invert">
        <span className="animate-colorful-text bg-gradient-to-r from-primary via-accent to-error bg-clip-text text-transparent dark:animate-colorful-text dark:bg-gradient-to-r dark:from-primary dark:via-accent dark:to-error dark:bg-clip-text dark:text-transparent">
          PORTFOLIO
        </span>
      </h1>
    </header>
  );
};

export default Banner;
