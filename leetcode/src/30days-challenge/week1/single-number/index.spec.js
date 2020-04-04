import { assert } from 'chai';

import { singleNumber } from './index';

const testcase = [
  [[2, 2, 1], 1],
  [[4, 1, 2, 1, 2], 4],
  [[4, 1, 2, 1, 2, 4, 5], 5],
];

describe('single-number', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(singleNumber(param), result);
    });
  });
});
