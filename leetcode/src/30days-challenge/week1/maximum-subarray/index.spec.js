import { assert } from 'chai';

import { maxSubArray } from './index';

const testcase = [
  [2324, true],
];

describe('maxSubArray', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(maxSubArray(param), result);
    });
  });
});
