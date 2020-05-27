import { assert } from 'chai';

import { numIslands } from './index';

const testcase = [
  [
    [
      [1,1,1,1,0],
      [1,1,0,1,0],
      [1,1,0,0,0],
      [0,0,0,0,0],
    ],
    1
  ],
  [
    [
      [1,1,0,0,0],
      [1,1,0,0,0],
      [0,0,1,0,0],
      [0,0,0,1,1],
    ],
    3
  ],
];

describe('numIslands', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(numIslands(param), result);
    });
  });
});
