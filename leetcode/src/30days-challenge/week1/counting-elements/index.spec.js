import { assert } from 'chai';

import { countElements } from './index';

const testcase = [
  [[1,2,3], 2],
  [[1,1,3,3,5,5,7,7], 0],
  [[1,3,2,3,5,0], 3],
  [[1,1,2,2], 2]
];

describe('countElements', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(countElements(param), result);
    });
  });
});
