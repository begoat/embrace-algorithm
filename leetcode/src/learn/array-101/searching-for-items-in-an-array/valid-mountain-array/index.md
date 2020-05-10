---
date: "2020-05-09"
title: "validMountainArray"
timeSpent: 10
---

## validMountainArray (10 mins)

### Question：

##### Description:
* Given an array A of integers, return true if and only if it is a valid mountain array.
* Recall that A is a mountain array if and only if:
  - A.length >= 3
  - There exists some i with 0 < i < A.length - 1 such that:
    - A[0] < A[1] < ... A[i-1] < A[i]
    - A[i] > A[i+1] > ... > A[A.length - 1]
* ![hint-valid-array](https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png)

##### Note:
* 0 <= A.length <= 10000
* 0 <= A[i] <= 10000

##### Examples:
```
Input: [2,1]
Output: false

Input: [3,5,5]
Output: false

Input: [0,3,2,1]
Output: true
```

### Process:
- 找唯一的最大值
- 线性查找
- 不对不对，这个mountain要求连续上升，然后下降
- 其实可以直接从定义出发，找到N个转折点，转折点超过2就挂了，或者有两个连续相等的值

### Answer:

### Others Answer:
