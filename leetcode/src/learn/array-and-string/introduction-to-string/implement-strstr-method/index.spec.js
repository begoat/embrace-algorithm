import { assert } from 'chai';

import { strStr } from './index';

const testcase = [
  [2324, true],
];

describe('strStr', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(strStr(param), result);
    });
  });
});
