import { assert } from 'chai';

import { removeDuplicates } from './index';

const testcase = [
  [[1,1,2], 2],
  [[0,0,1,1,1,2,2,3,3,4], 5],
];

describe('removeDuplicates', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(removeDuplicates(param), result);
    });
  });
});
