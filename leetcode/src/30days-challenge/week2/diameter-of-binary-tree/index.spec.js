import { assert } from 'chai';

import { diameterOfBinaryTree } from './index';

const testcase = [
  [2324, true],
];

describe('diameterOfBinaryTree', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(diameterOfBinaryTree(param), result);
    });
  });
});
