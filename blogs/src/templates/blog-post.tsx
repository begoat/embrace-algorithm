import React from 'react';
import { graphql } from 'gatsby';

const BlogPostTmpl = ({ data }: any) => {
  const { html } = data.markdownRemark;
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
};

export default BlogPostTmpl;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;