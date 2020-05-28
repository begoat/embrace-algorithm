import { assert } from 'chai';

import { dailyTemperatures } from './index';

const testcase = [
  [[73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]],
];

describe('dailyTemperatures', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(dailyTemperatures(param), result);
    });
  });
});
