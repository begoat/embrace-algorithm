import { assert } from 'chai';

import { dominantIndex } from './index';

const testcase = [
  [[3, 6, 1, 0], 1],
  [[1, 2, 3, 4], -1],
];

describe('dominantIndex', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(dominantIndex(param), result);
    });
  });
});
