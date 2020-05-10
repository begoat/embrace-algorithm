import { assert } from 'chai';

import { thirdMax } from './index';

const testcase = [
  [[3, 2, 1], 1],
  [[1, 2], 2],
  [[2, 2, 3, 1], 1],
];

describe('thirdMax', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(thirdMax(param), result);
    });
  });
});
