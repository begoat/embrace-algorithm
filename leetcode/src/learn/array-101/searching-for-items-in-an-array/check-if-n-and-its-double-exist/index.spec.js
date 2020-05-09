import { assert } from 'chai';

import { checkIfExist } from './index';

const testcase = [
  [[10,2,5,3], true],
  [[7,1,14,11], true],
  [[3,1,7,11], false],
  [[-2,0,10,-19,4,6,-8], false]
];

describe('checkIfExist', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(checkIfExist(param), result);
    });
  });
});
