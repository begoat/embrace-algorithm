import React from 'react';
import _ from 'lodash';
import dayjs from 'dayjs';

import { TABLE_DETAULT_CONTENT } from '@/constants';
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
      {date ? dayjs(date).format('YYYY-MM-DD') : TABLE_DETAULT_CONTENT}
    </Cell>
  );
};
