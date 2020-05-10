import { assert } from 'chai';

import { sortArrayByParity } from './index';

const testcase = [
  [[3,1,2,4], 10],
];

describe('sortArrayByParity', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(sortArrayByParity(param), result);
    });
  });
});
