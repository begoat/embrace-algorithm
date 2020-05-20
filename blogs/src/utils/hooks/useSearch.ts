import { useState, useEffect, useMemo, useCallback } from 'react';
import _ from 'lodash';

import { LOCAL_MOCK_RESP_TIME } from '@/constants';

type SortType = 'desc' | 'asc';

interface SortState {
  sortType: SortType;
  sortColumn: string;
};

interface SourceBindingProps {
  value: any;
  mapFn: (value: any) => (dataItem: any) => boolean;
}

export const useSearch = (
  originData: Array<any>,
  sourceBinding: Array<SourceBindingProps>,
  originSortCol: string,
  originSortType: SortType
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [sortParams, setVal] = useState<SortState>({
    sortColumn: originSortCol,
    sortType: originSortType
  });

  const deps = useMemo(
    () =>
      [originData, sortParams.sortType, sortParams.sortColumn].concat(
        sourceBinding.map(s => s.value)
      ),
    [sourceBinding, originData, sortParams.sortColumn, sortParams.sortType]
  );
  const onSortColumn = useCallback((dataKey: string, sortType: SortType) => {
    setVal({
      sortColumn: dataKey,
      sortType,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const dataFiltered = _.filter(originData, o => {
      return sourceBinding.every(ss => {
        return ss.mapFn(ss.value)(o);
      });
    });

    const result = _.orderBy(dataFiltered, [sortParams.sortColumn], [sortParams.sortType]);

    setTimeout(() => {
      setData(result);
      setLoading(false);
    }, LOCAL_MOCK_RESP_TIME);
  }, deps);

  return {
    loading,
    data,
    sortColumn: sortParams.sortColumn,
    sortType: sortParams.sortType,
    onSortColumn,
  };
};
