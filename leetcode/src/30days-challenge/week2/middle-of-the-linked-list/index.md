---
date: "2020-04-09"
title: "Middle of the Linked List"
---

## Middle of the Linked List (10 mins)

### Question：

##### Description:
* Given a non-empty, singly linked list with head node head, return a middle node of linked list.
* If there are two middle nodes, return the second middle node.

##### Note:
* The number of nodes in the given list will be between 1 and 100.

##### Examples:
```
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
```

### Process:
- mark 感觉mark一下，遍历的时候把每个序号存一下，然后到时候直接return 这个obj 就可以了 o1 的算法

### Answer:

### Others Answer:
