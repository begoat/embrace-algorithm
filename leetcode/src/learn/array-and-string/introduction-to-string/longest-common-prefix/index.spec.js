import { assert } from 'chai';

import { longestCommonPrefix } from './index';

const testcase = [
  [['flower','flow','flight'], 'fl'],
  [['dog','racecar','car'], ''],
  [[''], ''],
  [['asdasd'], 'asdasd'],
  [['',''], '']
];

describe('longestCommonPrefix', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(longestCommonPrefix(param), result);
    });
  });
});
