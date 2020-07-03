import { assert } from 'chai';

import { canVisitAllRooms } from './index';

const testcase = [
  [[[1], [2], [3], []], true],
  [[[1,3], [3,0,1], [2], [0]], false],
];

describe('canVisitAllRooms', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(canVisitAllRooms(param), result);
    });
  });
});
