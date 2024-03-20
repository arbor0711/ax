import { Link } from "gatsby";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white px-10 md:px-24 py-16 text-texty relative">
      <section className="mb-20">
        <div className="mb-10">
          <h1 className="text-h1 text-headings">Privacy Policy</h1>
          <i className="text-xs ">Effective date: Jun 01, 2021</i>
        </div>
        <p>
          At Devscoops, accessible from{" "}
          <Link to="/">https://devscoops.com</Link>, the privacy of our visitors
          is of utmost importance to us. This Privacy Policy document outlines
          the types of information that Devscoops collects and records, and how
          we utilize this information. This Privacy Policy applies only to our
          online activities and is valid for visitors to our website concerning
          the information that they share and/or collect on Devscoops. Please
          note that this policy does not apply to any information collected
          offline or through channels other than this website.
        </p>
        <h2 className="text-h2 text-headings">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms. For our Terms and Conditions, please visit the
          Terms & Conditions page.
        </p>
        <h2 className="text-h2 text-headings">Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to
          us, such as your name, email address, phone number, and any other
          information you choose to provide when contacting us or interacting
          with our website.
        </p>
        <h2 className="text-h2 text-headings">How We Use Your Information</h2>
        We may use the information we collect for various purposes, including:
        <li>Providing, operating, and maintaining our website.</li>
        <li>Improving, personalizing, and expanding our website.</li>
        <li>Understanding and analyzing how you use our website.</li>
        <li>Developing new products, services, features, and functionality.</li>
        <li>
          Communicating with you for customer service, updates, and marketing
          purposes.
        </li>
        <li>Preventing fraud.</li>
        <h2 className="text-h2 text-headings">Log Files</h2>
        <p>
          Devscoops follows standard procedures for using log files. These files
          log visitors when they visit websites. The information collected may
          include internet protocol (IP) addresses, browser type, Internet
          Service Provider (ISP), date and time stamps, referring/exit pages,
          and possibly the number of clicks. This information is used for
          analyzing trends, administering the site, tracking users' movements on
          the website, and gathering demographic information.
        </p>
        <h2 className="text-h2 text-headings">Contact Us</h2>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, please contact us by email: hi@devscoops.com
        </p>
      </section>
      <div className="fixed bottom-10  right-10 ">
        <Link
          to="/"
          className=" btn btn-md text-white bg-navy hover:text-caterpillar hover:bg-navy"
        >
          <AiOutlineArrowLeft style={{ fontSize: "20px" }} />
          Home
        </Link>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
