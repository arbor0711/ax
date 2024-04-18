import React from "react";
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
    <div
      // className="w-10/12 h-10/12 overflow-y-scroll"
      style={{ width: "90%", height: "90%", overflowY: "scroll" }}
    >
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
      <div className="   flex flex-col items-center border border-raspberry">
        {/* TODO: close btn */}
        <button
          className="btn btn-circle absolute top-10 right-10 z-50 "
          onClick={handleClose}
        >
          <IoCloseSharp size={30} />
        </button>

        {/* TODO: backward/forward btn */}

        <div></div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
