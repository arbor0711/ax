import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Posts from "../../components/posts";
import Padding from "./../../components/padding";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <Padding>
        <div className="px-10">
          <p className="md:w-2/3 my-10">
            When I first <strong>start</strong>ed my journey in web design and
            development, I used to look for <strong>solutions</strong> to
            specific issues from various sources on the web. I would then
            compile them into my own <strong>documentation</strong>. But I soon
            realized that whenever my colleagues or friends would ask me how I
            accomplished something, I would <strong>have to explain</strong>{" "}
            each step individually or send them my documentation privately.
            <br />
            <br />
            That's when I thought of <strong>start</strong>ing a blog to{" "}
            <strong>share</strong> all of my findings and help others who may
            encounter <strong>similar issues</strong>. I am thrilled that you
            are able to read my blog today.
            <br />
            <br />I want to make it clear that while I have written about my
            personal experiences and solutions, I{" "}
            <strong>cannot guarantee</strong> that everything I have written
            here is <strong>factual</strong>. These solutions worked for me and
            my specific situation, but it's important to take into account other
            environmental factors that could affect your own situation.
            <br />
            <br />
            If you have a better solution, I would be more than{" "}
            <strong>happy</strong> to share it on my blog with{" "}
            <strong>your name</strong> attached, in order to enhance the
            documentation and help others.
            <br />
            <br />
            So, <strong>let's stay together and grow together!</strong>
          </p>
          <section className="mb-20">
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
            <Posts data={data} />
          </section>
        </div>
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
