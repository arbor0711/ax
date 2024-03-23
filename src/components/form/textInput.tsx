import React from "react";

interface Props {
  // errors: FieldErrors<{
  //   message: string;
  //   name: string;
  //   email: string;
  //   subject: string;
  //   interest: string;
  // }>;

  id: string;
  type: string;
  placeholder: string;
  name: string;
}

const TextInput = ({
  // errors,
  id,
  type,
  placeholder,
  name,
}: Props) => {
  return (
    <div className="my-3">
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full input input-bordered bg-transparent mb-2"
      />
      {/* {errors.name && <p className="text-danger">{errors.name.message}</p>} */}
    </div>
  );
};

export default TextInput;
