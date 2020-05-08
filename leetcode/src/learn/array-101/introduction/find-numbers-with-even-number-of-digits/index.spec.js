import { assert } from 'chai';

import { findNumbers } from './index';

const testcase = [
  [[12,345,2,6,7896], 2],
  [[555,901,482,1771], 1],
];

describe('findNumbers', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findNumbers(param), result);
    });
  });
});
