import React from "react";
import ProjectShowcase from "../components/projectShowcase ";

const portfolio = () => {
  return (
    <div>
      {/* این اطلاعات رو مثل قبل باید بیاری تو فایل دیتات و بعد از اونجا مپ کنی و پس کنی توی این کامپوننت */}
      <ProjectShowcase
        title="some text"
        address="some text"
        type="some text"
        service="some text"
        condition={true}
        role="some text"
        testimonial="some text"
      />
    </div>
  );
};

export default portfolio;
