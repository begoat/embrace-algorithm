import { assert } from 'chai';

import { plusOne } from './index';

const testcase = [
  [[1,2,3], [1,2,4]],
  [[4,3,2,1], [4,3,2,2]]
];

describe('plusOne', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(plusOne(param), result);
    });
  });
});
