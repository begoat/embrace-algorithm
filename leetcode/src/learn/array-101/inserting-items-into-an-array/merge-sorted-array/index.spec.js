import { assert } from 'chai';

import { merge } from './index';

const testcase = [
  [[[1,2,3,0,0,0], 3, [2,5,6], 3], [1,2,2,3,5,6]],
  [[[4,0,0,0,0,0], 1,[1,2,3,5,6], 5], [1,2,3,4,5,6]]
];

describe('merge', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(merge(...param), result);
    });
  });
});
