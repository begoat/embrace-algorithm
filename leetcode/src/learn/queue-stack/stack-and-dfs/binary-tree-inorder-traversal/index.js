/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// inorder 竟然是 先序遍历 -> Left, Root, Right
export var inorderTraversal = function(root) {
  let result = [];
  const myStack = [];
  const hashMap = new Map();
  myStack.push(root);

  while (myStack.length) {
    const lastEle = myStack.pop();
    if (hashMap.get(lastEle)) {
      result.push(lastEle.val);
      continue;
    }

    if (!lastEle) {
      continue;
    }

    if (lastEle.right !== null) {
      myStack.push(lastEle.right);
    }

    myStack.push(lastEle);

    if (lastEle.left !== null) {
      myStack.push(lastEle.left);
    }

    hashMap.set(lastEle, true);
  }

  return result;
};
