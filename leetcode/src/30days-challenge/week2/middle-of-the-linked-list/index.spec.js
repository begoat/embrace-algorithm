import { assert } from 'chai';

import { middleNode } from './index';

const testcase = [
  [2324, true],
];

describe('middleNode', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(middleNode(param), result);
    });
  });
});
