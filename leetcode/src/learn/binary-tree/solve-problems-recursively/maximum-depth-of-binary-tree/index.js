/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export var maxDepth = function(root) {
  const getMatDepth = (currRoot, currDepth) => {
    if (!currRoot) {
      return currDepth;
    }

    const leftD = getMatDepth(currRoot.left, currDepth + 1);
    const rightD = getMatDepth(currRoot.right, currDepth + 1);
    return Math.max(leftD, rightD);
  };

  return getMatDepth(root, 0);
};
