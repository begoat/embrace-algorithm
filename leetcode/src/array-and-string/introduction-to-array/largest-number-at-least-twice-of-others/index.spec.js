import { assert } from 'chai';

import { dominantIndex } from './index';

const testcase = [
  [2324, true],
];

describe('dominantIndex', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(dominantIndex(param), result);
    });
  });
});
