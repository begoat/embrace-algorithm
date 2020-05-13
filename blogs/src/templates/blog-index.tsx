import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import { Table } from 'rsuite';

import './blog-index.less';

const { Column, HeaderCell, Cell } = Table;
const whiteListSlug = '/template/';

export const BlogIndexTmpl = ({ data }: any) => {
  const blogs = _.get(data, 'allMarkdownRemark.edges', []);
  console.log('blogs', blogs);
  const tableData = _.map(blogs, d => {
    const slug = _.get(d, 'node.fields.slug', '');
    const frontMatter = _.get(d, 'node.frontmatter', {}) || {};
    const { title, date, qIdx, timeSpent, conquered, withHelp, wrongTime } = frontMatter;

    return {
      url: slug,
      title,
      date,
      qIdx,
      timeSpent,
      conquered,
      wrongTime,
      withHelp
    };
  }).filter(s =>
    s.url && whiteListSlug.indexOf(s.url) === -1 && s.url.indexOf('README') === -1
  ).map((ss, idx) => ({
    ...ss,
    index: idx + 1,
  }));

  console.log('tableData', tableData);

  return (
    <Table
      height={420}
      data={tableData}
      cellBordered
      autoHeight
      affixHeader
      affixHorizontalScrollbar
      bordered
      // sortColumn={this.state.sortColumn}
      // sortType={this.state.sortType}
      // onSortColumn={this.handleSortColumn}
      // loading={this.state.loading}
    >
      <Column width={70} align="center" sortable>
        <HeaderCell>idx</HeaderCell>
        <Cell dataKey="index" />
      </Column>

      <Column width={110} sortable>
        <HeaderCell>Conquered</HeaderCell>
        <Cell dataKey="conquered" />
      </Column>

      <Column width={110} sortable>
        <HeaderCell>withHelp</HeaderCell>
        <Cell dataKey="withHelp" />
      </Column>

      <Column minWidth={250} flexGrow={1} sortable>
        <HeaderCell>QuestionTitle</HeaderCell>
        <Cell dataKey="title" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>Date</HeaderCell>
        <Cell dataKey="date" />
      </Column>

      <Column width={120} sortable>
        <HeaderCell>TimeSpent</HeaderCell>
        <Cell dataKey="timeSpent" />
      </Column>

      <Column width={140} sortable>
        <HeaderCell>wrongTime</HeaderCell>
        <Cell dataKey="wrongTime" />
      </Column>

      <Column width={124} sortable align='center'>
        <HeaderCell>QuestionUrl</HeaderCell>
        <Cell>
          {(rowData: any) => {
            const slug = _.get(rowData, 'url');
            return (
              <Link to={slug}>跳转</Link>
            );
          }}
        </Cell>
      </Column>
    </Table>
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
          html
          frontmatter {
            title
            timeSpent
            qIdx
            date
            conquered
            wrongTime
            withHelp
          }
        }
      }
    }
  }
`;
