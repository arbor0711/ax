import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  title?: string;
}

const Seo = ({ title }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data, title);
  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
