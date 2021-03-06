import { assert } from 'chai';

import { getTriggerTime } from './index';

const testcase = [
  [[[[2,8,4],[2,5,0],[10,9,8]], [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]], [2,-1,3,-1]],
  [[[[0,4,5],[4,8,8],[8,6,1],[10,10,0]], [[12,11,16],[20,2,6],[9,2,6],[10,18,3],[8,14,9]]], [-1,4,3,3,3]],
];

describe('getTriggerTime', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(getTriggerTime(...param), result);
    });
  });
});
