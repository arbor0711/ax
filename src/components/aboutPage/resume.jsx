import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdNextPlan } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";
import resume from "../../data/resume.pdf";

const Resume = () => {
  const [page, setPage] = useState(1);

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-h2 mt-h2t mb-h2b">Resume</h2>

      <a
        className="group btn mb-5 w-64"
        href={resume}
        download="Alireza-Keshavarz-Shirazi-CV"
      >
        <span className="group-hover:translate-y-0.5 transition duration-300 ">
          <FaCloudDownloadAlt color="#FFC700" size={20} />
        </span>
        download
      </a>
      <div className="flex items-center justify-center w-full  ">
        {page === 1 && (
          <StaticImage
            src="../../data/cv-page-1.png"
            alt="Resume Image"
            className="w-3/4 md:w-1/2 rounded-lg"
          />
        )}
        {page === 2 && (
          <StaticImage
            src="../../data/cv-page-2.png"
            alt="Resume Image"
            className="w-3/4 md:w-1/2 rounded-lg"
          />
        )}
      </div>

      <div className="flex gap-5 mx-auto justify-center items-center mt-3 mb-10">
        <button
          className={`${
            page === 1 && "cursor-not-allowed"
          }   btn-circle hover:-rotate-6`}
        >
          <MdNextPlan
            size={40}
            style={{ transform: "scaleX(-1)" }}
            onClick={() => {
              setPage(1);
            }}
          />
        </button>
        Page {page} of 2
        <button
          className={`${
            page === 2 && "cursor-not-allowed"
          }   btn-circle hover:-rotate-6`}
          onClick={() => {
            setPage(2);
          }}
        >
          <MdNextPlan size={40} />
        </button>
      </div>
    </section>
  );
};

export default Resume;
