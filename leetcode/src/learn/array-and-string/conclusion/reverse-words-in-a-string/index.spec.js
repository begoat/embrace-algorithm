import { assert } from 'chai';

import { reverseWords } from './index';

const testcase = [
  [2324, true],
];

describe('reverseWords', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(reverseWords(param), result);
    });
  });
});
