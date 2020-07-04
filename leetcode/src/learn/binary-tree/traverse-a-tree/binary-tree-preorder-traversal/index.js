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
 * @return {number[]}
 */
export function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

export var preorderTraversal = function(root) {
  const result = [];
  let stack = [];
  let hashMap = new Map();
  stack.push(root);
  while (stack.length) {
    const topEle = stack.pop();
    if (!topEle) {
      continue;
    }

    if (!hashMap.get(topEle)) {
      result.push(topEle.val);
      hashMap.set(topEle, true);
    }
    if (topEle.right) {
      stack.push(topEle.right);
    }

    if (topEle.left) {
      stack.push(topEle.left);
    }

  }

  return result;
};
