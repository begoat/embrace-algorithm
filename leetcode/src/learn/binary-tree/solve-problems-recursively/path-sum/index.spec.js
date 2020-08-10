import { assert } from 'chai';

import { hasPathSum, TreeNode } from './index';

const testcase = [
  [2324, true],
];

describe('hasPathSum', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('example', () => {
    const t41 = new TreeNode(7, null, null);
    const t42 = new TreeNode(2, null, null);
    const t48 = new TreeNode(1, null, null);
    const t31 = new TreeNode(11, t41, t42);
    const t33 = new TreeNode(13, null, null);
    const t34 = new TreeNode(4, null, t48);
    const t21 = new TreeNode(4, t31, null);
    const t22 = new TreeNode(8, t33, t34);
    const t1 = new TreeNode(5, t21, t22);
    assert.equal(hasPathSum(t1, 22), true);
  });
});
