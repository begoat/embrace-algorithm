import { assert } from 'chai';

import { isValid } from './index';

const testcase = [
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
  ['', true]
];

describe('isValid', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(isValid(param), result);
    });
  });
});
