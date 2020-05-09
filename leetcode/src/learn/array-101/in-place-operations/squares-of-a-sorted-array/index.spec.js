import { assert } from 'chai';

import { sortedSquares } from './index';

const testcase = [
  [2324, true],
];

describe('sortedSquares', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(sortedSquares(param), result);
    });
  });
});
