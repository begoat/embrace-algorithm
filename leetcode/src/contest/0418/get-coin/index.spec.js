import { assert } from 'chai';

import { minCount } from './index';

const testcase = [
  [[4,2,1], 4],
  [[2,3,10], 8],
];

describe('minCount', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(minCount(param), result);
    });
  });
});
