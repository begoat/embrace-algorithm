import { assert } from 'chai';

import { merge } from './index';

const testcase = [
  [2324, true],
];

describe('merge', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(merge(param), result);
    });
  });
});
