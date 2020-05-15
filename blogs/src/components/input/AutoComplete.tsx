import React, { useMemo } from 'react';
import _ from 'lodash';
import { AutoComplete } from 'rsuite';
import { AutoCompleteProps } from 'rsuite/lib/AutoComplete';

interface CustomAutoCompleteProps extends AutoCompleteProps {
  dataSource?: Array<any>;
  sourceKeys?: Array<string>;
  valueKey?: string;
}

const simpleIncludeSearch = (val: string, iterObj: any, fields: Array<string>) => {
  return _.some(fields, f => {
    if (_.includes(iterObj[f], val)) {
      return true;
    }

    return false;
  });
};

export const CustomAutoComplete = ({
  dataSource,
  sourceKeys = [],
  valueKey = '',
  value = '',
  ...rest
}: CustomAutoCompleteProps) => {
  const sourceNotEmpty = !_.isEmpty(sourceKeys) && !_.isEmpty(dataSource);
  const data: Array<string> = useMemo(() => {
    if (sourceNotEmpty && value !== '') {
      return _.reduce(dataSource, (accu, curr) => {
        if (simpleIncludeSearch(value, curr, sourceKeys)) {
          accu = curr[valueKey] ? [...accu, curr[valueKey]] : accu;
          return accu;
        }

        return accu;
      }, [] as Array<string>);
    }

    return [];
  }, [sourceNotEmpty, dataSource, sourceKeys, value, valueKey]);

  console.log('data', data);

  return (
    <AutoComplete
      data={data}
      value={value}
      {...rest}
    />
  );
};
