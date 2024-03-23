import React from "react";

const HeroImage = () => {
  return (
    <header className="bg-[url('../images/header.gif')] dark:invert bg-white py-10 flex flex-col justify-center bg-fixed">
      <h3 className="text-3xl md:text-5xl mx-auto leading-tight dark:invert">
        <span className="flex">
          Hello
          <span className="text-[rgb(255,64,64)] dark:text-[rgb(255,64,64)]  ">
            There
          </span>
          ( <span className="animate-waving-hand ">👋🏻</span>) =&gt;
          <span>&#123; </span>
        </span>
        <br />
        <div className="-my-10 pl-10">
          <span> this.</span>is ("
          <span
            className=" animate-colorful-text bg-gradient-to-r from-primary via-accent to-error bg-clip-text text-transparent
          dark:animate-colorful-text dark:bg-gradient-to-r dark:from-primary dark:via-accent dark:to-error 
          dark:bg-clip-text dark:text-transparent
          "
          >
            Alireza
          </span>
          ")
          <br />
          <span className="text-[rgb(5,179,156)] dark:text-[rgb(5,179,156)] ">
            Join
          </span>{" "}
          me
          <span className="text-[rgb(41,170,225)] dark:text-[rgb(41,170,225)] ">
            !
          </span>
        </div>
        <br />
        <span>&#125;</span>
      </h3>
      <span className="mx-auto text-lg md:text-xl text-bermuda w-80 dark:invert text-center">
        I'm developing. You're browsing.
        <span className="animate-blinking-text absolute">|</span>
      </span>
    </header>
  );
};

export default HeroImage;
