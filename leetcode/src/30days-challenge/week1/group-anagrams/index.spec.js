import { assert } from 'chai';

import { groupAnagrams } from './index';

const testcase = [
  [2324, true],
];

describe('groupAnagrams', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(groupAnagrams(param), result);
    });
  });
});
