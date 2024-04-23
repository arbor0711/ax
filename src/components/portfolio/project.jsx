import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ProjectPage = ({ data }) => {
  const {
    slug,
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

  const projectIndex = data.allMarkdownRemark.edges.findIndex((project) => {
    return project.node.frontmatter.slug === slug;
  });

  const carousel = (action) => {
    const length = data.allMarkdownRemark.edges.length;
    const next = projectIndex === length - 1 ? 0 : projectIndex + 1;
    const prev = projectIndex === 0 ? length - 1 : projectIndex - 1;
    console.log(length, next, prev, projectIndex);
    if (action === "next") {
      return () =>
        navigate(
          `/portfolio/${data.allMarkdownRemark.edges[next].node.frontmatter.slug}`
        );
    }
    if (action === "prev") {
      return () =>
        navigate(
          `/portfolio/${data.allMarkdownRemark.edges[prev].node.frontmatter.slug}`
        );
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const styleDetailsKey = "italic font-medium";
  const styleDetailsValue = "ml-5";
  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
      <GatsbyImage
        image={getImage(imgSrc.childImageSharp)}
        alt={"some text"}
        className="animate-project-page-background absolute object-cover width-screen height-full"
      />
      {/* FIXME: Add a back button */}
      {/* <button onClick={goBack} className="absolute top-14 left-20 z-50   ">
        <IoArrowBackCircle size={50} color="#FDC600" />
      </button> */}
      <div className="absolute  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  z-50 ">
        <div className="flex justify-between w-screen">
          <button onClick={carousel("prev")}>
            <MdNavigateBefore color="#FDC600" size={50} />{" "}
          </button>
          <button onClick={carousel("next")}>
            <MdNavigateNext color="#FDC600" size={50} />{" "}
          </button>
        </div>
      </div>
      <div
        className=" absolute w-[90vw] h-[90vh] bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 rounded-xl shadow-2xl overflow-y-auto overflow-x-hidden "
        style={{
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="w-screen min-h-[90vh] py-3 md:py-5 sm:px-3 md:px-16 text-texty dark:text-gray-100 ">
          <h2 className="text-h3 md:text-h2 px-10 text-center">{title}</h2>
          <div className="flex flex-col  px-10  justify-around items-center bg-transparent h-[70vh]">
            <div
              className="flex gap-5 justify-center items-center
            flex-col md:flex-row
            "
            >
              <div className="flex flex-col items-center w-2/5">
                <a
                  className=" flex mb-1 md:mb5 z-50"
                  href={address}
                  rel="noreferrer"
                  target="_blank"
                >
                  Site
                  <span className="-rotate-45 ml-1">
                    <FaArrowRight size={15} />
                  </span>
                </a>

                <div
                  className="
                hidden md:flex
                rounded-t-xl overflow-hidden mb-3 border border-navy border-b-8 h-[260px]  md:h-[250px]"
                >
                  <GatsbyImage
                    image={getImage(imgSrc.childImageSharp)}
                    alt={imgAlt}
                  />
                </div>
              </div>

              <div>
                <table className="{styleDetails}">
                  <tbody>
                    <tr>
                      <td className={styleDetailsKey}>Website Address:</td>
                      <td className={styleDetailsValue}>{address}</td>
                    </tr>
                    <tr>
                      <td className={styleDetailsKey}>Website Type:</td>
                      <td className={styleDetailsValue}>{type}</td>
                    </tr>
                    <tr>
                      <td className={styleDetailsKey}>Service Type:</td>
                      <td className={styleDetailsValue}> {service}</td>
                    </tr>
                    <tr>
                      <td className={styleDetailsKey}>Current Condition:</td>
                      <td className={styleDetailsValue}>{condition}</td>
                    </tr>
                    <tr>
                      <td className={styleDetailsKey}>My Role:</td>
                      <td className={styleDetailsValue}>{role}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <main className=" w-11/12 ">
              {testimonial && (
                <div className="flex  gap-5 flex-col md:flex-row">
                  <div className="flex gap-5 items-center ">
                    <div className="w-16 rounded-full overflow-hidden">
                      <GatsbyImage
                        image={getImage(avatarSrc.childImageSharp)}
                        alt={avatarAlt}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold ">{person}</p>

                      <p className=" text-sm font-light ">{position}</p>
                    </div>
                  </div>

                  <p className="  text-base">{testimonial}</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
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
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          frontmatter {
            imgSrc {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            slug
            imgAlt
            service
          }
          id
        }
      }
    }
  }
`;
