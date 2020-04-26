import { assert } from 'chai';

import { pivotIndex } from './index';

const testcase = [
  [2324, true],
];

describe('pivotIndex', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(pivotIndex(param), result);
    });
  });
});
