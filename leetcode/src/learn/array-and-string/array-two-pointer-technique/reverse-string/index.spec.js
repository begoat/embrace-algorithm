import { assert } from 'chai';

import { reverseString } from './index';

const testcase = [
  [['h','e','l','l','o'], ['o','l','l','e','h']],
  [['H','a','n','n','a','h'], ['h','a','n','n','a','H']]
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
