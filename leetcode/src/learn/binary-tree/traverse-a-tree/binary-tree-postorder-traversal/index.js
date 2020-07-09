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
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// left right root
export var postorderTraversal = function(root) {
  let hashMap = new Map();
  let stack = [];
  let result = [];
  stack.push(root);
  while (stack.length) {
    const topEle = stack.pop();

    if (hashMap.get(topEle)) {
      result.push(topEle.val);
      continue;
    }

    if (!topEle) {
      continue;
    }

    stack.push(topEle);
    // 右在前没有问题，栈嘛
    if (topEle.right) {
      stack.push(topEle.right);
    }

    if (topEle.left) {
      stack.push(topEle.left);
    }

    hashMap.set(topEle, true);
  }

  return result;
};
