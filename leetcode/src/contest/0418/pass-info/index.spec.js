import { assert } from 'chai';

import { numWays } from './index';

const testcase = [
  [[5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]] ,3], 3],
  [[3, [[0,2],[2,1]], 2], 0],
];

describe('numWays', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(numWays(...param), result);
    });
  });
});
