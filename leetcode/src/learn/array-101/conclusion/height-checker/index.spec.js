import { assert } from 'chai';

import { heightChecker } from './index';

const testcase = [
  [2324, true],
];

describe('heightChecker', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(heightChecker(param), result);
    });
  });
});
