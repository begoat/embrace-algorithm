import { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';

import { LOCAL_MOCK_RESP_TIME } from '@/constants';

interface SourceBindingProps {
  value: any;
  mapFn: (value: any) => (dataItem: any) => boolean;
}

export const useSearch = (originData: Array<any>, sourceBinding: Array<SourceBindingProps>) => {
  // TODO: integrate sort(maybe a use Sort will be better??)
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const deps = useMemo(() => [originData].concat(sourceBinding.map(s => s.value)), [sourceBinding, originData]);
  useEffect(() => {
    setLoading(true);
    const ddd = _.filter(originData, o => {
      return sourceBinding.every(ss => {
        return ss.mapFn(ss.value)(o);
      });
    });

    setTimeout(() => {
      setData(ddd);
      setLoading(false);
    }, LOCAL_MOCK_RESP_TIME);
  }, deps);

  return {
    loading,
    data
  };
};
