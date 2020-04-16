import { assert } from 'chai';

import { productExceptSelf } from './index';

const testcase = [
  [2324, true],
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
