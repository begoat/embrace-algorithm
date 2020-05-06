import { assert } from 'chai';

import { rotate } from './index';

const testcase = [
  [[[1,2,3,4,5,6,7], 3], [5,6,7,1,2,3,4]],
  [[[-1,-100,3,99], 2], [3,99,-1,-100]],
];

describe('rotate', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(rotate(...param), result);
    });
  });
});
