import { assert } from 'chai';

import { stringShift } from './index';

const testcase = [
  [2324, true],
];

describe('stringShift', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(stringShift(param), result);
    });
  });
});
