import { assert } from 'chai';

import { minSubArrayLen } from './index';

const testcase = [
  [2324, true],
];

describe('minSubArrayLen', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(minSubArrayLen(param), result);
    });
  });
});
