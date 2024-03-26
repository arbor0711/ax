import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Project } from "../../data/data";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  data: Project | undefined;
  onClick: () => void;
}
const ProjectShowcase = ({ data, onClick }: Props) => {
  if (data === undefined) return;
  return (
    <div
      className="
      bg-[url('../images/portfolio/912saakaar.com.png')]
      w-screen h-screen bg-top animate-projectPage-background bg-opacity-10 flex justify-center items-center absolute top-0 left-0"
    >
      <div className="text-gray-400 backdrop-opacity-40 backdrop-invert bg-black/30 w-10/12 h-ninety rounded-3xl overflow-hidden p-10 md:px-20 flex flex-col md:flex-row">
        <button
          onClick={onClick}
          className="btn btn-circle border-none bg-button_Primary hover:bg-button_primary_hover absolute top-10 right-10"
        >
          <IoCloseSharp color="#fff" size={30} />
        </button>

        <main>
          <h3 className="text-white text-h3">{data.title}</h3>
          <div>
            <span className="text-gray-100 italic font-bold">
              Website Address:{" "}
            </span>
            <span>{data.address}</span>
          </div>
          <div>
            <span className="text-gray-100 italic font-bold">
              Website Type:{" "}
            </span>
            <span>{data.type}</span>
          </div>
          <div>
            <span className="text-gray-100 italic font-bold">
              Service Type:{" "}
            </span>
            {data.service.map((item, id) => (
              <span key={id}>{item}</span>
            ))}
          </div>
          <div>
            <span className="text-gray-100 italic font-bold">
              Current Condition:
            </span>
            <span>
              {data.condition
                ? "Website Up and Running"
                : "Website Currently Unavailable"}
            </span>
          </div>
          <div>
            <span className="text-gray-100 italic font-bold">My Role: </span>
            {data.role.map((item, id) => (
              <span key={id}>{item}</span>
            ))}
          </div>

          {data.testimonial && (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  {data.testimonial.avatar}
                </div>
              </div>
              <div className="chat-header">{data.testimonial?.person}</div>
              <div className="chat-bubble">{data.testimonial?.text}</div>
            </div>
          )}
          <a className="group btn  mb-5 btn-wide " href={data.address}>
            Visit The Website
            <span className="group-hover:translate-x-0.5 transition duration-300">
              <FaArrowRightLong color="#FFC700" />
            </span>
          </a>
        </main>

        <aside className="px-10 lg:flex flex-col justify-center hidden ">
          <div className="mockup-phone w-9/12 ">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-[url('../images/header.gif')]">
                Hi.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectShowcase;
