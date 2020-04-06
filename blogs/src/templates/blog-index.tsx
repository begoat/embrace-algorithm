import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';

const whiteListSlug = '/template/';

export const BlogIndexTmpl = ({ data }: any) => {
  const blogs = _.get(data, 'allMarkdownRemark.edges', []);
  return (
    blogs.map((b: any) => {
      const slug = _.get(b, 'node.fields.slug', '');
      const title = _.get(b, 'node.frontmatter.title', '');
      if (whiteListSlug.indexOf(slug) !== -1 || !title) {
        return null;
      }

      return (
        <article key={slug}>
          <header>
            <h3>
              <Link
                style={{ boxShadow: 'none' }}
                to={slug}
                rel="bookmark"
              >{title}
              </Link>
            </h3>
          </header>
        </article>
      );
    })
  );
};

export default BlogIndexTmpl;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
