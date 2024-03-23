import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPhoneCallThin } from "react-icons/pi";
import { PiGithubLogoBold } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold ">Get in Touch</h1>
      <p className="text-sm  mt-3">
        Have some big idea or brand to develop and need help? Then reach out
        we'd love to hear about your project and provide help.
      </p>
      <ul className="mt-12 space-y-8">
        <li className="flex items-center text-sm ml-3">
          <CiMail />
          <a
            target="blank"
            href="mailto:hi@devscoops.com"
            className=" text-sm ml-3"
          >
            <strong>hi@devscoops.com</strong>
          </a>
        </li>
        <li className="flex items-center text-sm ml-3">
          <PiPhoneCallThin />

          <a target="_blank" href="tel:+31616146752" className=" text-sm ml-3">
            <strong>+31616146752</strong>
          </a>
        </li>
        <li className="flex items-center text-sm ml-3">
          <CiLocationOn />
          <a
            target="_blank"
            href="https://www.google.com/maps?q@51.9131194,4.5423966,17z/data=!3m1!4b1!4m6!3m5!1s0x47c4334135f8737b:0x860c8a67c716cf83!8m2!3d51.9131161!4d4.5449715!16s%2Fg%2F11h3nkfqwm?entry=ttu"
            className=" text-sm ml-3"
          >
            <strong>Rotterdam, Netherlands</strong>
          </a>
        </li>
      </ul>
      <ul className="flex mt-12 space-x-4">
        <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
          <a href="https://www.linkedin.com/in/alireza-k-shirazi/">
            <FaLinkedinIn color="white" />
          </a>
        </li>
        <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
          <a href="https://github.com/arbor0711">
            <PiGithubLogoBold color="white" size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
