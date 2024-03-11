import React from "react";

const HeroImage = () => {
  return (
    <header
      className="bg-[url('../images/header.gif')] h-96 flex flex-col justify-center "
      // style="background-image: url('assets/images/header.gif');"
    >
      <h1 className="text-5xl mx-auto text-bermuda leading-tight">
        <span className="flex">
          Hello<span className="text-[rgb(255,64,64)]">There</span>({" "}
          <span className="animate-waving-hand ">👋🏻</span>) =&gt;
          <span>&#123; </span>
        </span>
        <br />
        <div className="-my-10 pl-10">
          <span> this.</span>is ("
          <span className=" animate-colorful-text bg-gradient-to-r from-primary via-accent to-error bg-clip-text text-transparent">
            Alireza
          </span>
          ")
          <br />
          <span className="text-[rgb(5,179,156)]">Join</span> me
          <span className="text-[rgb(41,170,225)]">!</span>
        </div>
        <br />
        <span>&#125;</span>
      </h1>
      <span className="mx-auto text-xl text-bermuda w-80">
        I'm developing. You're browsing.
        <span className="animate-blinking-text">|</span>
      </span>
    </header>
  );
};

export default HeroImage;
