import { assert } from 'chai';

import { sortedSquares } from './index';

const testcase = [
  [[-4,-1,0,3,10], [0,1,9,16,100]],
  [[-7,-3,2,3,11], [4,9,9,49,121]],
  [[-2,-1,3], [1,4,9]]
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
