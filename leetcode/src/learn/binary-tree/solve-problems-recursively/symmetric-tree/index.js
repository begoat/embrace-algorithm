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
 * @return {boolean}
 */

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function checkArraySymmetric(arr) {
  for (let i = 0; i < arr.length / 2; i ++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }

  return true;
}

export var isSymmetric = function(root) {
  const queue = [];
  const hashMap = new Map();
  queue.push(root);
  while (queue.length) {
    let result = [];
    let currLevelLen = queue.length;
    // 已经是全是叶子节点为null了
    if (queue.every(q => q && q.val === null)) {
      break;
    }

    for (let i = 0; i < currLevelLen; i++) {
      const topEle = queue.shift();

      if (!topEle) {
        continue;
      }

      if (!hashMap.get(topEle)) {
        result.push(topEle.val);
        hashMap.set(topEle, true);
      }

      if (topEle.left) {
        queue.push(topEle.left);
      } else {
        queue.push(new TreeNode(null, null, null));
      }

      if (topEle.right) {
        queue.push(topEle.right);
      } else {
        queue.push(new TreeNode(null, null, null));
      }
    }

    if (!checkArraySymmetric(result)) {
      return false;
    }
  }

  return true;
};
