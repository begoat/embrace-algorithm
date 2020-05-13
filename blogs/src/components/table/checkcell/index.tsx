import React from 'react';
import _ from 'lodash';
import { Table, Checkbox } from 'rsuite';
import { TableCellProps } from 'rsuite/lib/Table/TableCell';
import { CheckboxProps } from 'rsuite/lib/Checkbox';

const { Cell } = Table;

interface CheckCellProps extends TableCellProps {
  dataKey: string;
  checkboxProps?: CheckboxProps;
}

export const CheckCell = ({
  checkboxProps,
  ...props
}: CheckCellProps) => {
  const { dataKey, rowData } = props;
  const isChecked = _.get(rowData, dataKey, false);
  return (
    <Cell {...props}>
      <Checkbox checked={isChecked} {...checkboxProps}>
        {isChecked ? '是' : '否'}
      </Checkbox>
    </Cell>
  );
};
