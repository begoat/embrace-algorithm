import { assert } from 'chai';

import { validMountainArray } from './index';

const testcase = [
  [[2,1], false],
  [[3,5,5], false],
  [[0,3,2,1], true],
  [[9,8,7,6,5,4,3,2,1,0], false]
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
