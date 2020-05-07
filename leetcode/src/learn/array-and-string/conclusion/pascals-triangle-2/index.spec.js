import { assert } from 'chai';

import { getRow } from './index';

const testcase = [
  [3, [1,3,3,1]],
  [4, [1,4,6,4,1]],
];

describe('getRow', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(getRow(param), result);
    });
  });
});
