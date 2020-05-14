import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import { BaseCell as Cell, BaseCellProps } from '../basecell';

export const LinkCell = ({
  dataKey = '',
  rowData,
  title,
  ...props
}: BaseCellProps) => {
  const url = _.get(rowData, dataKey);
  return (
    <Cell {...props}>
      <Link to={url}>{title}</Link>
    </Cell>
  );
};
