import { assert } from 'chai';

import { stringShift } from './index';

const testcase = [
  [['abc', [[0,1],[1,2]]], 'cab'],
  [['abcdefg', [[1,1],[1,1],[0,2],[1,3]]], 'efgabcd'],
];

describe('stringShift', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(stringShift(...param), result);
    });
  });
});
