const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const customConfig = require('./webpack.custom.js');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig(customConfig);
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const blogPost = require.resolve('./src/templates/blog-post.js');
  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const posts = _.get(results, 'data.allMarkdownRemark.edges', []);
  posts.forEach(post => {
    const { slug } = post.node.fields;
    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
        previous: 'preserved',
        next: 'preserved',
      }
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};
