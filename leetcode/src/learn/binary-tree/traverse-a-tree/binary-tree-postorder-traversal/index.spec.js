import { assert } from 'chai';

import { postorderTraversal, TreeNode } from './index';

describe('postorderTraversal', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('postorder', () => {
    const t3 = new TreeNode(3, null, null);
    const t2 = new TreeNode(2, t3, null);
    const t1 = new TreeNode(1, null, t2);
    assert.deepEqual(postorderTraversal(t1), [3, 2, 1]);
  });
});
