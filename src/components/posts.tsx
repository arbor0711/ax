import { Link } from "gatsby";
import React from "react";
import BlogPostCard from "./blogPostCard";
interface Props {
  data?: any;
}
const Posts = ({ data }: Props) => {
  console.log(data);
  return (
    <section className="flex flex-wrap gap-5 justify-center">
      {data.allMdx.nodes.map((node: any) => (
        // here I should add PostCard component

        <BlogPostCard key={node.id} node={node} />
      ))}
    </section>
  );
};

export default Posts;
