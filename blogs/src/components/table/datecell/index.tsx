import React from 'react';
import _ from 'lodash';
import dayjs from 'dayjs';

import { BaseCell as Cell, BaseCellProps } from '../basecell';

interface DateCellProps extends BaseCellProps {
  format?: string;
}

export const DateCell = ({
  dataKey = '',
  rowData,
  format,
  ...props
}: DateCellProps) => {
  const date = _.get(rowData, dataKey, false);
  return (
    <Cell dataKey={dataKey} rowData={rowData} {...props}>
      {dayjs(date).format('YYYY-MM-DD')}
    </Cell>
  );
};
