import { assert } from 'chai';

import { maxProfit } from './index';

const testcase = [
  [[7,1,5,3,6,4], 7],
  [[1,2,3,4,5], 4],
  [[7,6,4,3,1], 0],
  [[1,4,2], 3]
];

describe('maxProfit', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(maxProfit(param), result);
    });
  });
});
