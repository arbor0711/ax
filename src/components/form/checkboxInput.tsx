import React from "react";

interface Props {
  name: string;
  id: string;
  htmlFor: string;
  label: string;
  clickHandler: (label: string) => void;
  interest: string;
}

const CheckboxInput = ({
  name,
  id,
  htmlFor,
  label,
  clickHandler,
  interest,
}: Props) => {
  return (
    <div
      className="flex items-center"
      onClick={() => {
        clickHandler(label);
      }}
    >
      <input
        name={name}
        type="checkbox"
        id={id}
        className="hidden peer mr-4"
        checked={interest === label ? true : false}
        onChange={(e) => {}}
      />
      <label
        htmlFor={htmlFor}
        className="select-none cursor-pointer flex items-center justify-center  border-2 bg-transparent px-4 py-2 rounded-md text-sm tracking-wider font-medium outline-none text-gray-400 transition-colors duration-200 ease-in-out peer-checked:bg-[#a91079] peer-checked:text-white peer-checked:border-[#a91079]"
      >
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxInput;
