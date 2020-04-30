import { assert } from 'chai';

import { twoSum } from './index';

const testcase = [
  [[[2,7,11,15], 9], [1,2]],
];

describe('twoSum', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(twoSum(...param), result);
    });
  });
});
