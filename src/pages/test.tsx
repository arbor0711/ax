import React from "react";

const test = () => {
  return (
    <>
      <button className="relative">
        <span className="absolute left-0 w-full h-1 bg-green-500 transition-all"></span>
        <div className="p-4">HOVER ME</div>
        <span className="absolute right-0 w-full h-1 bg-green-500 transition-all"></span>
      </button>
    </>
  );
};

export default test;
