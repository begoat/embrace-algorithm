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
 * @return {number[][]}
 */

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const result = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let tmpArray = [];
    const lenOfCurrentLevel = stack.length;
    for (let i = 0; i < lenOfCurrentLevel; i++) {
      const popEle = stack.shift();
      tmpArray.push(popEle.val);
      if (popEle.left) {
        stack.push(popEle.left);
      }

      if (popEle.right) {
        stack.push(popEle.right);
      }
    }

    result.push(tmpArray);
  }

  return result;
};
