/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const getMiddle = arr => {
  const idx = Math.floor(arr.length / 2);
  return arr[idx];
};

export const middleNode = function(head) {
  let nodeList = [head];
  while(head.next !== null) {
    nodeList.push(head.next);
    head = head.next;
  }

  return getMiddle(nodeList);
};
