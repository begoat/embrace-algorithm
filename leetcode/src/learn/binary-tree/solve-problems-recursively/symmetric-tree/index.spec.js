import { assert } from 'chai';

import { TreeNode, isSymmetric, checkTreeArraySymmetric } from './index';

describe('isSymmetric', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('1', () => {
    const t31 = new TreeNode(3, null, null);
    const t32 = new TreeNode(4, null, null);
    const t33 = new TreeNode(4, null, null);
    const t34 = new TreeNode(3, null, null);
    const t21 = new TreeNode(2, t31, t32);
    const t22 = new TreeNode(2, t33, t34);
    const t1 = new TreeNode(1, t21, t22);

    assert.equal(isSymmetric(t1), true);
  });

  it ('2', () => {
    const t32 = new TreeNode(3, null, null);
    const t34 = new TreeNode(3, null, null);
    const t21 = new TreeNode(2, null, t32);
    const t22 = new TreeNode(2, null, t34);
    const t1 = new TreeNode(1, t21, t22);

    assert.equal(isSymmetric(t1), false);
  });

  it ('0-1', () => {
    const t21 = new TreeNode(0, null, null);
    const t1 = new TreeNode(1, t21, null);

    assert.equal(isSymmetric(t1), false);
  });

  it ('3', () => {
    const t41 = new TreeNode(6, null, null);
    const t48 = new TreeNode(6, null, null);
    const t31 = new TreeNode(5, t41, null);
    const t34 = new TreeNode(5, null, t48);
    const t21 = new TreeNode(4, t31, null);
    const t22 = new TreeNode(4, null, t34);
    const t1 = new TreeNode(3, t21, t22);

    assert.equal(isSymmetric(t1), true);
  });
});
