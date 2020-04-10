import { assert } from 'chai';

import { MinStack } from './index';

const testcase = [
  [2324, true],
];

describe('MinStack', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(MinStack(param), result);
    });
  });
});
