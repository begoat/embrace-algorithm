import { assert } from 'chai';

import { strStr } from './index';

const testcase = [
  [['hello', 'll'], 2],
  [['aaaaa', 'bba'], -1],
  [['', ''], 0],
  [['aaa', 'aa'], 0]
];

describe('strStr', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(strStr(...param), result);
    });
  });
});
