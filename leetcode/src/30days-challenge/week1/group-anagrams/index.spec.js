import { assert } from 'chai';

import { groupAnagrams } from './index';

const testcase = [
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    [
      ['ate', 'eat', 'tea'],
      ['nat', 'tan'],
      ['bat']
    ]
  ],
];

describe('groupAnagrams', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(groupAnagrams(param).length, result.length);
    });
  });
});
