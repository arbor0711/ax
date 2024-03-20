import { Link } from "gatsby";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white px-10 md:px-24 py-16 text-texty relative">
      <section className="mb-20">
        <div className="mb-10">
          <h1 className="text-h1 text-headings">Terms of Service</h1>
          <i className="text-xs ">Effective date: Jun 01, 2021</i>
        </div>
        <p>
          Thanks for using <Link to="/">https://devscoops.com</Link>. My mission
          is to improving the online environment through the design and
          development of pleasing and accessible websites and web applications.
          Through this journey, I want to share my valuable learning experiences
          with you.
        </p>
        <h2 className="text-h2 text-headings">Liability for links</h2>
        <p>
          Our offer contains links to external third-party websites over whose
          content we have no influence. We therefore cannot assume any liability
          for this external content. The respective provider or operator of the
          pages is always responsible for the content of the linked pages. The
          linked pages were checked for possible legal violations at the time of
          linking. Illegal content was not apparent at the time of linking.
          However, permanent control of the content of the linked pages is
          unreasonable without concrete evidence of a legal violation. If we
          become aware of any legal violations, we will immediately remove such
          links.
        </p>
        <h2 className="text-h2 text-headings">Copyright</h2>
        <p>
          The content and works on these pages created by the site operators are
          subject to German copyright law. Reproduction, processing,
          distribution and any kind of exploitation outside the limits of
          copyright law require the written consent of the respective author or
          creator. Downloads and copies of this page are only permitted for
          private, non-commercial use. If the content on this site was not
          created by the operator, the copyrights of third parties are
          respected. In particular contents of third parties are marked as such.
          Should you nevertheless become aware of a copyright infringement, we
          ask that you notify us accordingly. If we become aware of any legal
          violations, we will immediately remove such content.
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
