import { assert } from 'chai';

import { pivotIndex } from './index';

const testcase = [
  [[1, 7, 3, 6, 5, 6], 3],
  [[1, 2, 3], -1],
];

describe('pivotIndex', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(pivotIndex(param), result);
    });
  });
});
