---
date: "2020-05-08"
title: "Squares of a Sorted Array"
timeSpent: 0
---

## Squares of a Sorted Array ( mins)

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
- 先做一次排序吧，如果这样的话 一开始给到的条件就没什么用了
  - 要想有用，可以做半个排序，也就是只负责把 < 0 的部分插入到右边

### Answer:

### Others Answer:
