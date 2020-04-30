import { assert } from 'chai';

import { arrayPairSum } from './index';

const testcase = [
  [[1,4,3,2], 4],
  [[1, 1], 1],
];

describe('arrayPairSum', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(arrayPairSum(param), result);
    });
  });
});
