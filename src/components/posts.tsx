import { Link } from "gatsby";
import React from "react";
interface Props {
  data?: any;
}
const Posts = ({ data }: Props) => {
  return (
    <section className="flex flex-wrap gap-5 justify-center">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id} className="w-1/4 border rounded-lg p-5">
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <br />
        </article>
      ))}
    </section>
  );
};

export default Posts;
