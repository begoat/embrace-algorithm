import { assert } from 'chai';

import { moveZeroes } from './index';

const testcase = [
  [2324, true],
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
