import { assert } from 'chai';

import { findDiagonalOrder } from './index';

const testcase = [
  [[
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ], [1,2,4,7,5,3,6,8,9]],
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
