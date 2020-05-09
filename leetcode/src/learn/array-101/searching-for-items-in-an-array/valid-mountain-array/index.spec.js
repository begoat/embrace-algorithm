import { assert } from 'chai';

import { validMountainArray } from './index';

const testcase = [
  [2324, true],
];

describe('validMountainArray', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(validMountainArray(param), result);
    });
  });
});
