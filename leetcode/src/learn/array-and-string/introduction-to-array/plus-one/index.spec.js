import { assert } from 'chai';

import { plusOne } from './index';

const testcase = [
  [2324, true],
];

describe('plusOne', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(plusOne(param), result);
    });
  });
});
