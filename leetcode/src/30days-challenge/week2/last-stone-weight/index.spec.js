import { assert } from 'chai';

import { lastStoneWeight, sortArrayDesc } from './index';

const testcase = [
  [[2,7,4,1,8,1], 1, [8,7,4,2,1,1]],
];

describe('lastStoneWeight', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result1, result2] = t;
    return it(param.toString(), () => {
      assert.deepEqual(sortArrayDesc(param), result2);
      assert.deepEqual(lastStoneWeight(param), result1);
    });
  });
});
