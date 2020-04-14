import { assert } from 'chai';

import { findMaxLength } from './index';

const testcase = [
  [2324, true],
];

describe('findMaxLength', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(findMaxLength(param), result);
    });
  });
});
