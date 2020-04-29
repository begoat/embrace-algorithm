import { assert } from 'chai';

import { reverseString } from './index';

const testcase = [
  [2324, true],
];

describe('reverseString', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(reverseString(param), result);
    });
  });
});
