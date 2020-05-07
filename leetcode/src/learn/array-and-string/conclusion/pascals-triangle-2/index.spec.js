import { assert } from 'chai';

import { getRow } from './index';

const testcase = [
  [2324, true],
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
