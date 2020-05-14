import React from 'react';
import _ from 'lodash';
import { Tooltip, Whisper, Table } from 'rsuite';
import { TableCellProps } from 'rsuite/lib/Table/TableCell';
import { TABLE_DETAULT_CONTENT } from '@/constants';

const { Cell } = Table;

export interface BaseCellProps extends TableCellProps {
  defaultDataVal?: string;
  showTooltip?: boolean;
  renderContent?: (rowData: any) => any;
  renderTooltip?: (rowData: any) => any;
}

export const BaseCell = ({
  dataKey = '',
  rowData,
  showTooltip = true,
  renderContent,
  renderTooltip,
  children,
  defaultDataVal,
  ...rest
}: BaseCellProps) => {
  if (children) {
    return (
      <Cell dataKey={dataKey} rowData={rowData} {...rest}>
        {children}
      </Cell>
    );
  }

  const defaultContent = (defaultDataVal === undefined ? TABLE_DETAULT_CONTENT : defaultDataVal);
  const data = _.get(rowData, dataKey) || defaultContent;
  const tooltip = <Tooltip>{data}</Tooltip>;
  return (
    <Cell dataKey={dataKey} rowData={rowData} {...rest}>
      {
        showTooltip && defaultContent !== data ? (
          <Whisper placement="auto" trigger="hover" speaker={tooltip}>
            <span>{data}</span>
          </Whisper>
        ) : (
          <span>{data}</span>
        )
      }
    </Cell>
  );
};
