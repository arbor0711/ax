import React from "react";

const HeroImage = () => {
  return (
    <header className="bg-[url('../images/header.gif')] dark:invert bg-white  h-96 flex flex-col justify-center bg-contain">
      <h1 className="text-5xl mx-auto text-bermuda leading-tight dark:invert">
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
      </h1>
      <span className="mx-auto text-xl text-bermuda w-80 dark:invert">
        I'm developing. You're browsing.
        <span className="animate-blinking-text absolute">|</span>
      </span>
    </header>
  );
};

export default HeroImage;
