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
  rows: number;
  placeholder: string;
  name: string;
}

const Textarea = ({
  // errors,
  id,
  rows,
  placeholder,
  name,
}: Props) => {
  return (
    <div>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        className="w-full textarea textarea-bordered bg-transparent mb-2 "
      ></textarea>
      {/* {errors.message && (
        <p className="text-danger">{errors.message.message}</p>
      )} */}
    </div>
  );
};

export default Textarea;
