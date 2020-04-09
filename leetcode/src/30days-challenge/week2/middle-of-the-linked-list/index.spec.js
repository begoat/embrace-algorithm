import { assert } from 'chai';

import { getMiddle } from './index';

const testcase = [
  [[1,2,3,4,5], 3],
  [[1,2,3,4,5,6], 4],
];

describe('middleNode', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(getMiddle(param), result);
    });
  });
});
