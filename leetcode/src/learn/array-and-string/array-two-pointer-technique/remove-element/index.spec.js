import { assert } from 'chai';

import { removeElement } from './index';

const testcase = [
  [[[3,2,2,3], 3], 2],
  [[[0,1,2,2,3,0,4,2], 2], 5],
  [[[2, 2, 3], 2], 1],
  [[[0,4,4,0,4,4,4,0,2], 4], 4]
];

describe('removeElement', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(removeElement(...param), result);
    });
  });
});
