import { Link } from "gatsby";
import React from "react";
import PostCard from "./postCard";
interface Props {
  data?: any;
}
const Posts = ({ data }: Props) => {
  return (
    <section className="flex flex-wrap gap-5 justify-center mb-10">
      {data.allMdx.nodes.map((node: any) => (
        // here I should add PostCard component

        <PostCard key={node.id} node={node} />
      ))}
    </section>
  );
};

export default Posts;
