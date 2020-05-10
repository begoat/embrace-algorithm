import { assert } from 'chai';

import { heightChecker } from './index';

const testcase = [
  [[1,1,4,2,1,3], 3],
  [[5,1,2,3,4], 5],
  [[1,2,3,4,5], 0]
];

describe('heightChecker', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(heightChecker(param), result);
    });
  });
});
