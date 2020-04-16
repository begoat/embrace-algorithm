import { assert } from 'chai';

import { productExceptSelf } from './index';

const testcase = [
  [[1,2,3,4], [24,12,8,6]],
  [[4,3,2,1,2], [12,16,24,48,24]]
];

describe('productExceptSelf', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(productExceptSelf(param), result);
    });
  });
});
