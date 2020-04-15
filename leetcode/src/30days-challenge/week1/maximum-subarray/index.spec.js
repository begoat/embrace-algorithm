import { assert } from 'chai';

import { maxSubArray } from './index';

const testcase = [
  [[-2,1,-3,4,-1,2,1,-5,4], 6],
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
