import { assert } from 'chai';

import { findDisappearedNumbers } from './index';

const testcase = [
  [[4,3,2,7,8,2,3,1], [6,5]],
  [[4,3,2,7,7,2,3,1], [8,6,5]]
];

describe('findDisappearedNumbers', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findDisappearedNumbers(param), result);
    });
  });
});
