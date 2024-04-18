const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query projects {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    actions.createPage({
      path: "/portfolio/" + slug,
      component: path.resolve(`src/components/portfolio/project.jsx`),
      context: { slug: slug },
    });
  });
};
