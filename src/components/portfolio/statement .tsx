import React from "react";
import DividerLine from "../dividerLine";
import { IoHeartCircle } from "react-icons/io5";

const Statement = () => {
  return (
    <article className="  bg-bg_bar pt-3 pb-10 md:px-20 mx-auto w-11/12 rounded-xl border-1 dark:z-10 ">
      <h3 className=" text-gray-400">
        <div className="flex  justify-center align-middle items-center mb-8">
          <span className="relative  h-4 w-4  ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB231E] opacity-75"></span>
            <span className="absolute inline-flex rounded-full -top-3 -left-3 ">
              <IoHeartCircle size={40} color="#FB231E" />
            </span>
          </span>
        </div>
        <DividerLine /> I Love This.
      </h3>
      <p className=" text-gray-400 leading-9">
        I’m proud of the <strong>relationships</strong> I’ve built with my{" "}
        <strong>colleagues</strong> and
        <strong>clients</strong>, as well as the websites and applications we’ve
        built
        <strong>together</strong>. My <strong></strong>goal is to make life{" "}
        <strong>easier</strong> for all people who <strong>engage</strong>
        with my works through <strong>user-centric</strong> design,{" "}
        <strong>usability, and functionality.</strong>
      </p>
    </article>
  );
};

export default Statement;
