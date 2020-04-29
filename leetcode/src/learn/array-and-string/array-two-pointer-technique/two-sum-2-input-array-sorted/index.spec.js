import { assert } from 'chai';

import { twoSum } from './index';

const testcase = [
  [2324, true],
];

describe('twoSum', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(twoSum(param), result);
    });
  });
});
