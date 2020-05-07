import { assert } from 'chai';

import { reverseWords } from './index';

const testcase = [
  ['Let\'s take LeetCode contest', 's\'teL ekat edoCteeL tsetnoc'],
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
