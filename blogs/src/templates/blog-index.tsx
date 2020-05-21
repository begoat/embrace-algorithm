import React, { useState, useMemo } from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import dayjs from 'dayjs';

import { CheckCell, DateCell, HeaderCell, Column, Cell, Table } from '@/components/table';
import { QStatusFilter, QStatus, QWithHelpFilter, QWithHelp } from '@/constants';
import { SelectPicker } from '@/components/picker';
import { AutoComplete } from '@/components/input';
import { useSearch } from '@/utils/hooks';

import './blog-index.less';

const whiteListSlug = '/template/';
const sourceKeys = ['title', 'date', 'qId', 'url'];
const searchMapFn = (value: string) => (o: any) => o.title.indexOf(value.trim()) !== -1;
const qStatusMapFn = (value: QStatus) => (o: any) => {
  if (value === QStatus.DONE) {
    return o.conquered;
  }

  if (value === QStatus.TODO) {
    return !o.conquered;
  }

  return true;
};
const qWithHelpMapFn = (value: QWithHelp) => (o: any) => {
  if (value === QWithHelp.YES) {
    return o.withHelp;
  }

  if (value === QWithHelp.NO) {
    return !o.withHelp;
  }

  return true;
};

export const BlogIndexTmpl = ({ data }: any) => {
  const [searchInput, setSearchInput] = useState('');
  const [qStatusVal, setQStatusVal] = useState(QStatus.ALL);
  const [qWithHelpVal, setQWithHelpVal] = useState(QWithHelp.ALL);
  const blogs = useMemo(() => _.get(data, 'allMarkdownRemark.edges', []), [data]);
  const tableData = useMemo(() => _.map(blogs, d => {
    const slug = _.get(d, 'node.fields.slug', '');
    const frontMatter = _.get(d, 'node.frontmatter', {}) || {};
    const { title, date, qId, timeSpent, conquered, withHelp, wrongTime } = frontMatter;
    const dayjsObj = dayjs(date);

    return {
      url: slug,
      title: (title && title.trim()) || '',
      date: dayjsObj.isValid() ? dayjsObj.toDate().getTime() : 0,
      qId: qId || 0,
      timeSpent: timeSpent || 0,
      conquered: conquered || false,
      wrongTime: wrongTime || 0,
      withHelp: withHelp || false
    };
  })
    .filter(s => s.url && whiteListSlug.indexOf(s.url) === -1 && s.url.indexOf('README') === -1)
    .filter(s => s.title)
    .map((ss, idx) => ({
      ...ss,
      index: idx + 1,
    })), [blogs]);

  const sourceBindingMemo = useMemo(() => {
    return [
      {
        value: searchInput,
        mapFn: searchMapFn,
      },
      {
        value: qStatusVal,
        mapFn: qStatusMapFn,
      },
      {
        value: qWithHelpVal,
        mapFn: qWithHelpMapFn,
      },
    ];
  }, [searchInput, qStatusVal, qWithHelpVal]);
  const searchResult = useSearch(tableData, sourceBindingMemo, 'date', 'desc');

  console.log('tableData', searchResult.data);
  return (
    <>
      <div className="custom-toolbar">
        <SelectPicker
          data={QStatusFilter}
          value={qStatusVal}
          onChange={setQStatusVal}
          cleanable={false}
          searchable={false}
          style={{minWidth: 100}}
          prependLabel="完成状态："
        />
        <SelectPicker
          data={QWithHelpFilter}
          value={qWithHelpVal}
          onChange={setQWithHelpVal}
          cleanable={false}
          searchable={false}
          style={{minWidth: 100}}
          prependLabel="完成情况："
        />
        {/** FIXME: no need to use this component */}
        <AutoComplete
          sourceKeys={sourceKeys}
          dataSource={tableData}
          valueKey='title'
          value={searchInput}
          onChange={setSearchInput}
          placeholder={`输入题目的${sourceKeys}进行搜索`}
          style={{width: 300, display: 'inline-block'}}
        />
      </div>
      <Table
        height={420}
        cellBordered
        autoHeight
        affixHeader
        affixHorizontalScrollbar
        bordered
        {...searchResult}
      >
        <Column width={70} align="center" sortable>
          <HeaderCell>idx</HeaderCell>
          <Cell dataKey="index" />
        </Column>

        <Column width={100} sortable>
          <HeaderCell>Conquered</HeaderCell>
          <CheckCell dataKey="conquered" />
        </Column>

        <Column width={110} sortable>
          <HeaderCell>withHelp</HeaderCell>
          <CheckCell dataKey="withHelp" />
        </Column>

        <Column minWidth={250} flexGrow={1} sortable>
          <HeaderCell>QuestionTitle</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column width={106} sortable align='center'>
          <HeaderCell>Date</HeaderCell>
          <DateCell dataKey="date" />
        </Column>

        <Column width={100} align='center' sortable>
          <HeaderCell>TimeSpent</HeaderCell>
          <Cell dataKey="timeSpent" />
        </Column>

        <Column width={100} sortable align='center'>
          <HeaderCell>wrongTime</HeaderCell>
          <Cell dataKey="wrongTime" />
        </Column>

        <Column width={140} sortable align='center'>
          <HeaderCell>题解</HeaderCell>
          <Cell>
            {(rowData: any) => {
              const slug = _.get(rowData, 'url');
              return (
                <Link to={slug}>题解跳转</Link>
              );
            }}
          </Cell>
        </Column>
        <Column width={140} sortable align='center'>
          <HeaderCell>原题</HeaderCell>
          <Cell>
            {(rowData: any) => {
              const slug = _.get(rowData, 'url');
              const qLink = slug.split('/')[slug.split('/').length + (slug.slice(-1) === '/' ? -2 : -1)];
              return (
                <a target="_blank" rel="noopener noreferrer" href={`https://leetcode.com/problems/${qLink}`}>原题跳转</a>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </>
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
            qId
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
