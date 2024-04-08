import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Project, projectsInfo } from "../../data/data";

interface Props {
  data: Project | undefined;
  handleClose: () => void;
  handleFlipping: (id: number) => void;
}
const ProjectShowcase = ({ data, handleClose, handleFlipping }: Props) => {
  if (data === undefined) return;

  const handleClick = (direction: string) => {
    let id = data.id;
    if (direction === "forward") {
      id = id === projectsInfo.length ? 1 : id + 1;
    } else if (direction === "backward") {
      id = id === 1 ? projectsInfo.length : id - 1;
    }
    handleFlipping(id);
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex flex-col items-center">
      {/* TODO: close btn */}
      <button
        className="btn btn-circle absolute top-10 right-10 z-50 "
        onClick={handleClose}
      >
        <IoCloseSharp size={30} />
      </button>

      {/* TODO: backward/forward btn */}
      <div className="flex justify-between items-center w-screen h-screen px-3 absolute">
        <div
          className="cursor-pointer text-gray-400 hover:text-white hover:-translate-x-1 transition duration-300"
          onClick={() => handleClick("backward")}
        >
          <IoIosArrowBack size={30} />
        </div>
        <div
          className="cursor-pointer  text-gray-400 hover:text-white hover:translate-x-1 transition duration-300"
          onClick={() => handleClick("forward")}
        >
          <IoIosArrowForward size={30} />
        </div>
      </div>

      <h2 className="text-h2 md:text-h1 text-gray-100 w-3/4 text-center mt-10">
        {data.title}
      </h2>

      <div className="flex flex-col-reverse md:flex-row mt-5 px-10 gap-10 justify-center items-center">
        <aside className="flex flex-col items-center w-1/2">
          <a
            className="text-white flex mb-5 z-50"
            href={data.address}
            target="_blank"
          >
            Site
            <span className="-rotate-45 ml-1">
              <FaArrowRight size={15} />
            </span>
          </a>

          <div className="rounded-t-xl overflow-hidden mb-3 border border-black border-b-8 h-[360px] w-[480px]">
            {data.img}
          </div>
        </aside>

        <main className="md:pt-5 w-1/2 ">
          <div>
            <div className="text-gray-100 font-light text-sm">
              <span className=" italic ">Website Address:</span>
              <span className=" text-gray-400 ml-5">{data.address}</span>
            </div>

            <div className="text-gray-100 font-light text-sm">
              <span className="text-gray-100 italic font-medium">
                Website Type:
              </span>
              <span className=" text-gray-400 ml-5">{data.type}</span>
            </div>

            <div className="text-gray-100 font-light text-sm">
              <span className="text-gray-100 italic font-medium">
                Service Type:{" "}
              </span>
              {data.service.map((item, id) => (
                <span className=" text-gray-400 ml-5" key={id}>
                  {item}
                </span>
              ))}
            </div>

            <div className="text-gray-100 font-light text-sm">
              <span className="text-gray-100 italic font-medium">
                Current Condition:
              </span>
              <span className=" text-gray-400 ml-5">
                {data.condition
                  ? "Website Up and Running"
                  : "Website Currently Unavailable"}
              </span>
            </div>

            <div className="text-gray-100 font-light text-sm">
              <span className="text-gray-100 italic font-medium ">
                My Role:{" "}
              </span>
              {data.role.map((item, id) => (
                <span className=" text-gray-400 ml-5" key={id}>
                  {item}
                </span>
              ))}
            </div>

            {data.testimonial && (
              <div className="flex flex-col gap-5  mt-10">
                <div className="flex gap-5 items-center ">
                  <div className="w-16 rounded-full overflow-hidden">
                    {data.testimonial.avatar}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-100 ">{data.testimonial.person}</p>

                    <p className="text-gray-400 text-base ">
                      {data.testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-100 text-base">
                  {data.testimonial?.text}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectShowcase;
