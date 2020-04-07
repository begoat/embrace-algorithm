import { assert } from 'chai';

import { maxProfit } from './index';

const testcase = [
  [2324, true],
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
