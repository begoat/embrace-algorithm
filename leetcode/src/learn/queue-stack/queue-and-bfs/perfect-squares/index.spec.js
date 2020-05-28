import { assert } from 'chai';

import { numSquares } from './index';

const testcase = [
  [12, 3],
  [13, 2],
];

describe('numSquares', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(numSquares(param), result);
    });
  });
});
