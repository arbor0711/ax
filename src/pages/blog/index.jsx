import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Posts from "../../components/posts";
import Padding from "./../../components/padding";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout pageTitle="My Blog">
      <Padding>
        <section>
          <section className="flex flex-col items-center ">
            <div className="my-10 flex gap-5 flex-col md:flex-row  p-5 items-center">
              <div className="w-10/12 md:w-2/3 ">
                <p>
                  When I first <strong>start</strong>ed my journey in web design
                  and development, I used to look for <strong>solutions</strong>{" "}
                  to specific issues from various sources on the web. I would
                  then compile them into my own <strong>documentation</strong>.
                  But I soon realized that whenever my colleagues or friends
                  would ask me how I accomplished something, I would{" "}
                  <strong>have to explain</strong> each step individually or
                  send them my documentation privately.
                  <br />
                  <br />
                  That's when I thought of <strong>start</strong>ing a blog to{" "}
                  <strong>share</strong> all of my findings and help others who
                  may encounter <strong>similar issues</strong>. I am thrilled
                  that you are able to read my blog today.
                  <br />
                </p>
              </div>
              <div className="w-10/12 md:w-1/3 flex flex-col items-center bg-gray-100 p-5 rounded-xl">
                <h3 className="text-white bg-raspberry rounded-full py-1 px-5">
                  Keep in Mind
                </h3>
                <p className="text-sm ">
                  What worked for me might not work for everyone. Let's
                  collaborate! If you've got a better solution, I'd love to
                  feature it on my blog with your name. Together, we can enhance
                  documentation and help others code smarter.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-center text-4xl mb-10">Posts</h2>
            {/* Category */}
            {/* <label className="form-control w-full max-w-xs mb-5">
              <div className="label font-bold text-base">
                <span className="">Select Category:</span>
              </div>
              <select className="select select-bordered select-ghost w-full max-w-xs">
                <option>Web Design</option>
                <option>React Hooks</option>
                <option>Gatsby.js</option>
                <option>Next.js</option>
                <option>Data Management</option>
              </select>
              <div className="label"></div>
            </label> */}
            <Posts data={posts} />
          </section>
        </section>
      </Padding>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {
  <Seo title="My blog posts"></Seo>;
};

export const postsQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
