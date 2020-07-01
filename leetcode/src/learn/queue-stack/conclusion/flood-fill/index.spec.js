import { assert } from 'chai';

import { floodFill } from './index';

describe('floodFill', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('flood fill', () => {
    assert.deepEqual(floodFill([[1,1,1], [1,1,0], [1,0,1]], 1, 1, 2), [[2,2,2],[2,2,0],[2,0,1]]);
    assert.deepEqual(floodFill([[0,0,0],[0,1,1]], 1, 1, 1), [[0,0,0],[0,1,1]]);
  });
});
