---
date: "2020-04-29"
title: "Array Partition I"
timeSpent: 13
---

## Array Partition I ( mins)

### Question：

##### Description:
* Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

##### Note:
* n is a positive integer, which is in the range of [1, 10000].
* All the integers in the array will be in the range of [-10000, 10000].

##### Examples:
```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

### Process:
- we need a sort algorithm to sort the array
- then we just calc the sum of array skipping the even index
- use two pointer tech to remove the complexity.

### Answer:

### Others Answer:
