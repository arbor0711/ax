import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  title: string;
  address: string;
  type: string;
  service: string;
  condition: boolean;
  role: string;
  testimonial: string;
}
const ProjectShowcase = ({
  title,
  address,
  type,
  service,
  condition,
  role,
  testimonial,
}: Props) => {
  return (
    <div className="w-screen h-screen bg-[url('../images/portfolio/912saakaar.com.png')] bg-top animate-projectPage-background bg-opacity-10 flex justify-center items-center">
      <div className="backdrop-opacity-40 backdrop-invert bg-black/30 w-10/12 h-ninety rounded-3xl overflow-hidden p-10">
        <button className="btn btn-circle border-none bg-button_Primary hover:bg-button_primary_hover absolute top-10 right-10">
          <IoCloseSharp color="#fff" size={30} />
        </button>

        <h3>nbp-perfume</h3>
        <div>
          <span>Website Address:</span>
          <span>
            This should be the name of the website or a catchy descriptor if the
            website doesn't have a specific name
          </span>
        </div>
        <div>
          <span>Website Type:</span>
          <span>
            Portfolio Website, E-commerce Website, Blogging Platform, Corporate
            Website, Landing Page, Social Networking Site
          </span>
        </div>
        <div>
          <span>Service Type:</span>
          <span>
            Graphic Design Services, Online Retail, Content Creation and
            Sharing, Business Information and Services, Event Planning and
            Management, Networking and Communication
          </span>
        </div>
        <div>
          <span>Current Condition:</span>
          <span>Active</span>
        </div>

        <div>
          <span>My Role:</span>
          <span>
            Clearly state your role in the project (e.g., designer, developer,
            project manager) and highlight any specific contributions you made.
          </span>
        </div>
        <div>
          <span>Client Testimonial:</span>
          <span>
            If applicable, include testimonials from satisfied clients or users
            to provide social proof of your work's quality and effectiveness.
          </span>
        </div>
        <a className="group btn  mb-5 btn-wide " href={address}>
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
