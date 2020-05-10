---
date: "2020-05-09"
title: "Squares of a Sorted Array"
timeSpent: 40
---

## Squares of a Sorted Array (40 mins)

### Question：

##### Description:
* Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

##### Note:
* 1 <= A.length <= 10000
* -10000 <= A[i] <= 10000
* A is sorted in non-decreasing order.

##### Examples:
```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Process:
- 找到交界点，0左边的元素的边界i
  - 所有的都平方，然后把刚刚i左边的元素都插到右边
  - 一开始想是想这么做的，后来自己太菜了，所以直接平方后，排序好了

### Answer:

### Others Answer:
