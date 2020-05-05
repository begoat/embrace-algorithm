import { assert } from 'chai';

import { minSubArrayLen } from './index';

const testcase = [
  [[7, [2,3,1,2,4,3]], 2],
  [[4, [1,4,4]], 1]
];

describe('minSubArrayLen', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(minSubArrayLen(...param), result);
    });
  });
});
