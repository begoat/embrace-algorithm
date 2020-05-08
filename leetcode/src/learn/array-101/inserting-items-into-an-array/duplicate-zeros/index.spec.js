import { assert } from 'chai';

import { duplicateZeros } from './index';

const testcase = [
  [[1,0,2,3,0,4,5,0], [1,0,0,2,3,0,0,4]],
  [[1,2,3], [1,2,3]],
  [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0]]
];

describe('duplicateZeros', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(duplicateZeros(param), result);
    });
  });
});
