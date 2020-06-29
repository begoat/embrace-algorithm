import { assert } from 'chai';

import { inorderTraversal, TreeNode } from './index';

describe('inorderTraversal', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('testcase', () => {
    const t3 = new TreeNode(3, null, null);
    const t2 = new TreeNode(2, t3, null);
    const t1 = new TreeNode(1, null, t2);
    const result = inorderTraversal(t1);
    assert.deepEqual(result, [1, 3, 2]);
  });
});
