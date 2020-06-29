import { assert } from 'chai';

import { findTargetSumWays } from './index';

const testcase = [
  [[[1, 1, 1, 1, 1], 3], 5],
  [[[0, 0, 0, 0, 0, 0, 0, 0, 1], 1], 256]
];

describe('findTargetSumWays', function() {
  it('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findTargetSumWays(...param), result);
    });
  });
});
