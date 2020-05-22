import React, { useMemo } from 'react';
import _ from 'lodash';
import { AutoComplete } from 'rsuite';
import { AutoCompleteProps } from 'rsuite/lib/AutoComplete';

interface CustomAutoCompleteProps extends AutoCompleteProps {
  dataSource?: Array<any>;
  sourceKeys?: Array<string>;
  valueKey?: string;
  dataMapper?: (d: any) => any;
}

const simpleIncludeSearch = (val: string, iterObj: any, fields: Array<string>) => {
  return _.some(fields, f => {
    if (_.includes(String(iterObj[f]), val)) {
      return true;
    }

    return false;
  });
};

const defaultFilterBy = () => true;
export const CustomAutoComplete = ({
  dataSource,
  sourceKeys = [],
  valueKey = '',
  value = '',
  dataMapper,
  ...rest
}: CustomAutoCompleteProps) => {
  const sourceNotEmpty = !_.isEmpty(sourceKeys) && !_.isEmpty(dataSource);
  const data: Array<string> = useMemo(() => {
    if (sourceNotEmpty && value !== '') {
      return _.uniq(_.reduce(dataSource, (accu, curr) => {
        curr = _.isFunction(dataMapper) ? dataMapper(curr) : curr;
        if (simpleIncludeSearch(value, curr, sourceKeys)) {
          accu = curr[valueKey] ? [...accu, curr[valueKey]] : accu;
          return accu;
        }

        return accu;
      }, [] as Array<string>));
    }

    return [];
  }, [sourceNotEmpty, dataMapper, dataSource, sourceKeys, value, valueKey]);

  return (
    <AutoComplete
      menuClassName="custom-autocomplete-menu"
      data={data}
      value={value}
      filterBy={defaultFilterBy}
      {...rest}
    />
  );
};
