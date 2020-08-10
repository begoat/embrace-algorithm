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

const checkIsLeafNode = tt => {
  return tt.left === null && tt.right === null;
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
export var hasPathSum = function(root, sum) {
  let myQueue = [];
  let hashMap = new Map();
  if (root) {
    root.accuVal = root.val;
  }

  myQueue.push(root);
  while (myQueue.length) {
    const currentLevelLen = myQueue.length;
    for (let i = 0; i < currentLevelLen; i++) {
      const frontEle = myQueue.shift();
      if (!frontEle) {
        continue;
      }

      if (frontEle.left) {
        frontEle.left.accuVal = frontEle.accuVal + frontEle.left.val;
        if (!hashMap.get(frontEle.left)) {
          myQueue.push(frontEle.left);
          hashMap.set(frontEle.left, true);
        }
      }

      if (frontEle.right) {
        frontEle.right.accuVal = frontEle.accuVal + frontEle.right.val;
        if (!hashMap.get(frontEle.right)) {
          myQueue.push(frontEle.right);
          hashMap.set(frontEle.right, true);
        }
      }

      if (checkIsLeafNode(frontEle) && frontEle.accuVal === sum) {
        return true;
      }
    }
  }

  return false;
};
