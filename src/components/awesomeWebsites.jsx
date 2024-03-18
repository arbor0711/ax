import React from "react";
import webapp from "../images/webapp.gif";

const AwesomeWebsites = () => {
  return (
    <div>
      <h4>
        AWESOME
        <img
          src={webapp}
          alt="Otter dancing with a fish"
          width={150}
          className="inline"
        />
      </h4>
      <span>Websites</span>
    </div>
  );
};

export default AwesomeWebsites;
