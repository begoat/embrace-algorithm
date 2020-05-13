const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const customConfig = require('./webpack.custom.js');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig(customConfig);
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // build blog-index page
  const blogIndex = require.resolve('./src/templates/blog-index.tsx');
  createPage({
    path: '/',
    component: blogIndex,
    context: {}
  });

  // build blog-post page
  const blogPost = require.resolve('./src/templates/blog-post.tsx');
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

// https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      timeSpent: Int
      qIdx: Int
      date: String
      wrongTime: Int
      conquered: Boolean
      withHelp: Boolean
    }
  `
  createTypes(typeDefs);
}
