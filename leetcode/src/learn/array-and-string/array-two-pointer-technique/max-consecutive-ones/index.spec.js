import { assert } from 'chai';

import { findMaxConsecutiveOnes } from './index';

const testcase = [
  [2324, true],
];

describe('findMaxConsecutiveOnes', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findMaxConsecutiveOnes(param), result);
    });
  });
});
