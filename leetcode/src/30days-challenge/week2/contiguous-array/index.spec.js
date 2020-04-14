import { assert } from 'chai';

import { findMaxLength } from './index';

const testcase = [
  [[0,1], 2],
  [[0,1,0], 2],
  [[0,1,0,1], 4],
  [[0,1,0,0], 2],
  [[0,1,0,0,1], 4],
  [[0,1,0,0,0], 2],
  [[0,1,0,0,0,1,1], 6],
  [[0,1,1,0,1,1,1,0], 4]
];

describe('findMaxLength', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findMaxLength(param), result);
    });
  });
});
