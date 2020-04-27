import { assert } from 'chai';

import { findDiagonalOrder } from './index';

const testcase = [
  [2324, true],
];

describe('findDiagonalOrder', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findDiagonalOrder(param), result);
    });
  });
});
