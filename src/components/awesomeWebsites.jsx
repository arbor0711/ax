import React from "react";
import webapp from "../images/webapp.gif";

const AwesomeWebsites = () => {
  // const fontSize = calc(1.625rem + 1.6vw)
  return (
    <div className="mb-96 flex flex-col justify-center mx-auto text-center">
      <h4
        style={{
          fontSize: "20vw",
          lineHeight: "0.75",
          marginTop: "120vh",
        }}
        className="mb-0 "
      >
        AWESOME
        {/* <img
          src={webapp}
          alt="Otter dancing with a fish"
          width={150}
          className="inline"
        /> */}
      </h4>
      <span
        style={{ fontSize: "10vw", lineHeight: "0.75", marginBottom: "100vh" }}
      >
        Websites
      </span>
    </div>
  );
};

export default AwesomeWebsites;
