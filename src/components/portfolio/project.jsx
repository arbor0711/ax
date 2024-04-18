import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TestPage = ({ data }) => {
  const {
    title,
    imgSrc,
    imgAlt,
    address,
    type,
    service,
    condition,
    role,
    person,
    position,
    avatarSrc,
    avatarAlt,
    testimonial,
  } = data.markdownRemark.frontmatter;
  return (
    <div className="w-screen min-h-screen p-5 sm:p-10 md:p-16 text-texty dark:text-gray-100 ">
      <h2 className="text-h3 md:text-h2 px-10 text-center mb-10 md:mb-20 ">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row  px-10  justify-around items-center bg-transparent">
        <aside className="flex flex-col items-center w-2/5">
          <a
            className=" flex mb-5 z-50"
            href={address}
            rel="noreferrer"
            target="_blank"
          >
            Site
            <span className="-rotate-45 ml-1">
              <FaArrowRight size={15} />
            </span>
          </a>

          <div className="rounded-t-xl overflow-hidden mb-3 border border-navy border-b-8 h-[260px] sm:h-[400px] md:h-[250px]">
            <GatsbyImage
              image={getImage(imgSrc.childImageSharp)}
              alt={imgAlt}
              className=" animate-projectPage-background"
            />
          </div>
        </aside>
        <main className="md:pt-5 w-1/2 ">
          <div>
            <div className=" font-light text-sm border-b-2 border-gray-100 dark:border-gray-900 mb-1 md:mb-2">
              <span className=" italic ">Website Address:</span>
              <span className="  ml-5">{address}</span>
            </div>

            <div className=" font-light text-sm border-b-2 border-gray-100 dark:border-gray-900 mb-1 md:mb-2">
              <span className=" italic font-medium">Website Type:</span>
              <span className="  ml-5">{type}</span>
            </div>

            <div className=" font-light text-sm border-b-2 border-gray-100 dark:border-gray-900 mb-1 md:mb-2">
              <span className=" italic font-medium">Service Type:</span>
              {service}
            </div>

            <div className=" font-light text-sm border-b-2 border-gray-100 dark:border-gray-900 mb-1 md:mb-2">
              <span className=" italic font-medium">Current Condition:</span>
              <span className="  ml-5">{condition}</span>
            </div>

            <div className=" font-light text-sm border-b-2 border-gray-100 dark:border-gray-900 mb-1 md:mb-2">
              <span className=" italic font-medium ">My Role:</span>
              {role}
            </div>

            {person && (
              <div className="flex flex-col gap-5  mt-10">
                <div className="flex gap-5 items-center ">
                  <div className="w-16 rounded-full overflow-hidden">
                    <GatsbyImage
                      image={getImage(avatarSrc.childImageSharp)}
                      alt={avatarAlt}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className=" ">{person}</p>

                    <p className=" text-base ">{position}</p>
                  </div>
                </div>
                <p className=" text-base">{testimonial}</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TestPage;

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        imgAlt
        address
        type
        service
        condition
        role
        person
        position
        avatarSrc {
          childImageSharp {
            gatsbyImageData
          }
        }
        avatarAlt
        testimonial
        imgSrc {
          childImageSharp {
            gatsbyImageData
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
