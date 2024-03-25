import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Project } from "../../data/data";

interface Props {
  data: Project | undefined;
  onClick: () => void;
}
const ProjectShowcase = ({ data, onClick }: Props) => {
  if (data === undefined) return;
  return (
    <div className="w-screen h-screen bg-[url('../images/portfolio/912saakaar.com.png')] bg-top animate-projectPage-background bg-opacity-10 flex justify-center items-center absolute top-0 left-0">
      <div className="text-gray-400 backdrop-opacity-40 backdrop-invert bg-black/30 w-10/12 h-ninety rounded-3xl overflow-hidden p-10">
        <button
          //TODO:
          onClick={onClick}
          className="btn btn-circle border-none bg-button_Primary hover:bg-button_primary_hover absolute top-10 right-10"
        >
          <IoCloseSharp color="#fff" size={30} />
        </button>

        <h3 className="text-gray-100 text-h3">{data.title}</h3>
        <div className="mb-5">
          <span>Website Address:</span>
          <span>{data.address}</span>
        </div>
        <div className="mb-5">
          <span>Website Type:</span>
          <span>
            Portfolio Website, E-commerce Website, Blogging Platform, Corporate
            Website, Landing Page, Social Networking Site
          </span>
        </div>
        <div className="mb-5">
          <span>Service Type:</span>
          <span>
            Graphic Design Services, Online Retail, Content Creation and
            Sharing, Business Information and Services, Event Planning and
            Management, Networking and Communication
          </span>
        </div>
        <div className="mb-5">
          <span>Current Condition:</span>
          <span>Active</span>
        </div>

        <div className="mb-5">
          <span>My Role:</span>
          <span>
            Clearly state your role in the project (e.g., designer, developer,
            project manager) and highlight any specific contributions you made.
          </span>
        </div>
        <div className="mb-5">
          <span>Client Testimonial:</span>
          <span>
            If applicable, include testimonials from satisfied clients or users
            to provide social proof of your work's quality and effectiveness.
          </span>
        </div>
        <a className="group btn  mb-5 btn-wide " href={data.address}>
          Visit The Website
          <span className="group-hover:translate-x-0.5 transition duration-300">
            <FaArrowRightLong color="#FFC700" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
