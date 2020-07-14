import { assert } from 'chai';

import { maxDepth, TreeNode } from './index';

describe('maxDepth', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('test', () => {
    const t15 = new TreeNode(15, null, null);
    const t7 = new TreeNode(7, null, null);
    const t20 = new TreeNode(20, t15, t7);
    const t9 = new TreeNode(9, null, null);
    const t3 = new TreeNode(3, t9, t20);
    assert.deepEqual(maxDepth(t3), 3);
  });
});
