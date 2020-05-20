import React from 'react';
import _ from 'lodash';
import { Checkbox } from 'rsuite';
import { CheckboxProps } from 'rsuite/lib/Checkbox';
import { BaseCell as Cell, BaseCellProps } from '../basecell';

interface CheckCellProps extends BaseCellProps {
  checkboxProps?: CheckboxProps;
}

const CheckCellStyles = {
  padding: "0 10px",
  display: "inline-flex",
  alignItems: "center",
}

export const CheckCell = ({
  dataKey = '',
  rowData,
  checkboxProps,
  ...props
}: CheckCellProps) => {
  const isChecked = _.get(rowData, dataKey, false);
  return (
    <Cell dataKey={dataKey} rowData={rowData} style={CheckCellStyles} {...props}>
      <Checkbox checked={isChecked} {...checkboxProps}>
        {isChecked ? '是' : '否'}
      </Checkbox>
    </Cell>
  );
};
