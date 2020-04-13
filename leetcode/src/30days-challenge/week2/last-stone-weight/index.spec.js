import { assert } from 'chai';

import { lastStoneWeight } from './index';

const testcase = [
  [2324, true],
];

describe('lastStoneWeight', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(lastStoneWeight(param), result);
    });
  });
});
