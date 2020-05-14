import React from 'react';
import _ from 'lodash';
import { Checkbox } from 'rsuite';
import { CheckboxProps } from 'rsuite/lib/Checkbox';
import { BaseCell as Cell, BaseCellProps } from '../basecell';

interface CheckCellProps extends BaseCellProps {
  checkboxProps?: CheckboxProps;
}

export const CheckCell = ({
  dataKey = '',
  rowData,
  checkboxProps,
  ...props
}: CheckCellProps) => {
  const isChecked = _.get(rowData, dataKey, false);
  return (
    <Cell dataKey={dataKey} rowData={rowData} {...props}>
      <Checkbox checked={isChecked} {...checkboxProps}>
        {isChecked ? '是' : '否'}
      </Checkbox>
    </Cell>
  );
};
