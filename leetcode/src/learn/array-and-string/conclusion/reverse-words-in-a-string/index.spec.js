import { assert } from 'chai';

import { reverseWords } from './index';

const testcase = [
  ['the sky is blue', 'blue is sky the'],
  ['  hello world!  ', 'world! hello'],
  ['a good   example', 'example good a'],
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
