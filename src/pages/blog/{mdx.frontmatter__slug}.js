import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

import Posts from "../../components/posts";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import authorImage from "../../images/author.jpg";

const BlogPost = ({ data, children }) => {
  const postSlug = data.mdx.frontmatter.slug;
  const posts = data.allMdx.nodes;
  const otherPosts = posts.filter((post) => post.frontmatter.slug !== postSlug);

  // console.log(data);
  console.log(otherPosts);
  const image = getImage(data.mdx.frontmatter.hero_image);
  const shareUrl = `https://devscoops.com/blog/${postSlug}/`;
  // const postId = data.allMdx.nodes.filter(
  //   (data) => data.frontmatter.slug === data.mdx.frontmatter.slug
  // )[0].id;
  // console.log(postId);
  // const otherPosts = data.allMdx.nodes.filter(
  //   (data) => data.frontmatter.slug !== data.mdx.frontmatter.slug
  // );
  return (
    <>
      <Layout
      //  pageTitle={data.mdx.frontmatter.title}
      >
        <header className="relative -top-24 left-0 right-0 ">
          <div className="w-full h-full bg-navy opacity-85 absolute z-10 top-0 left-0 right-0 "></div>
          <div>
            <GatsbyImage
              className="h-screen sm:min-h-[300px]"
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </div>
          <div
            className=" absolute flex flex-col justify-center items-center w-full h-full
            text-center top-0 z-10 "
          >
            <h1 className=" text-[1.2rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-extrabold text-white mb-5 w-10/12">
              {data.mdx.frontmatter.title}
            </h1>
            <div className="flex gap-3 justify-center items-center ">
              <span className="size-[66px] md:size-[76px] p-2 border border-white border-opacity-20 rounded-full flex justify-center items-center">
                <img
                  src={authorImage}
                  alt="Alireza Keshavarz Shirazi"
                  className="rounded-full grayscale contrast-100	"
                />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-caterpillar text-[0.75rem] md:text-[1.25rem]">
                  Alireza Keshavarz Shirazi
                </p>
                <p className="text-white text-[0.65rem] md:text-[1rem]">
                  {data.mdx.frontmatter.date}
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="sm:w-4/5 px-10 md:px-20 mb-20">{children}</section>
        <section className="flex items-center gap-3 justify-center mt-16 mb-10">
          <FacebookShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={data.mdx.frontmatter.title}
            className="Demo__some-network__share-button"
          >
            <XIcon size={32} round />
          </TwitterShareButton>
        </section>

        <section className="flex justify-center items-center flex-col">
          <h2 className="mb-5">Want to read more?</h2>

          <Posts data={otherPosts} />
        </section>
      </Layout>
    </>
  );
};

// export const postQuery = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         slug
//         date(formatString: "MMMM DD, YYYY")
//         hero_image_alt
//         hero_image_credit_link
//         hero_image_credit_text
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;
// export const postsQuery = graphql`
//   query {
//     allMdx(sort: { frontmatter: { date: DESC } }) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           slug
//           hero_image_alt
//           hero_image_credit_link
//           hero_image_credit_text
//           hero_image {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//         id
//         excerpt
//       }
//     }
//   }
// `;

export const combinedQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
