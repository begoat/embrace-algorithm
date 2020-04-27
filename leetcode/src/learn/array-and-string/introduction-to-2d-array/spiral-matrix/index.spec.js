import { assert } from 'chai';

import { spiralOrder } from './index';

const testcase = [
  [2324, true],
];

describe('spiralOrder', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(spiralOrder(param), result);
    });
  });
});
