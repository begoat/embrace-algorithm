/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

export function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
export var cloneGraph = function(node) {
  if (!node) return null;
  const hashMap = new Map();
  let mainStack = [node].slice();
  hashMap.set(node, new Node(node.val));
  while (mainStack.length > 0) {
    const lastNode = mainStack.pop();
    lastNode.neighbors.forEach(ne => {
      if (!hashMap.get(ne)) {
        hashMap.set(ne, new Node(ne.val));
        mainStack.push(ne);
      }

      hashMap.get(lastNode).neighbors.push(hashMap.get(ne));
    });

  }

  return hashMap.get(node);
};