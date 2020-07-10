import { assert } from 'chai';

import { levelOrder, TreeNode } from './index';

describe('levelOrder', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('level-order', () => {
    const t15 = new TreeNode(15, null, null);
    const t7 = new TreeNode(7, null, null);
    const t20 = new TreeNode(20, t15, t7);
    const t9 = new TreeNode(9, null, null);
    const t3 = new TreeNode(3, t9, t20);
    assert.deepEqual(levelOrder(t3), [
      [3],
      [9,20],
      [15,7]
    ]);
  });

  it ('level-order', () => {
    assert.deepEqual(levelOrder(null), []);
  });
});
