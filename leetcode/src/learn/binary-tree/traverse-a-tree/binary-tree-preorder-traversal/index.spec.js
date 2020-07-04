import { assert } from 'chai';

import { preorderTraversal, TreeNode } from './index';

describe('preorderTraversal', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('pre-order', () => {
    const t3 = new TreeNode(3, null, null);
    const t2 = new TreeNode(2, t3, null);
    const t1 = new TreeNode(1, null, t2);

    assert.deepEqual(preorderTraversal(t1), [1,2,3]);
  });

  it ('pre-order w1', () => {
    const t2 = new TreeNode(2, null, null);
    const t1 = new TreeNode(1, null, null);
    const t3 = new TreeNode(3, t1, t2);

    assert.deepEqual(preorderTraversal(t3), [3,1,2]);
  });

  it ('pre-order w2', () => {
    const t2 = new TreeNode(2, null, null);
    const t4 = new TreeNode(4, t2, null);
    const t3 = new TreeNode(3, null, null);
    const t1 = new TreeNode(1, t4, t3);

    assert.deepEqual(preorderTraversal(t1), [1,4,2,3]);
  });
});
