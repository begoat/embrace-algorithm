import { assert } from 'chai';

import { moveZeroes } from './index';

const testcase = [
  [[0,1,0,3,12], [1,3,12,0,0]],
];

describe('moveZeroes', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(moveZeroes(param), result);
    });
  });
});
