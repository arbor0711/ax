import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import loadingGIF from "../images/loading.gif";

const LoadingComponent = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#49E6CA]">
      <img
        src={loadingGIF}
        alt="Website is loading"
        className="rounded-full w-2/12"
      />

      <span className="text-2xl text-white font-bold mt-5">Loading...</span>
    </div>
  );
};

export default LoadingComponent;
