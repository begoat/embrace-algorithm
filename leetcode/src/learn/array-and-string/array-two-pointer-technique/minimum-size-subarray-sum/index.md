---
date: "2020-04-30"
title: "Minimum Size Subarray Sum"
timeSpent: 100
---

## Minimum Size Subarray Sum ( mins)

### Question：

##### Description:
* Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

##### Note:
* If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

##### Examples:
```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

### Process:
- O(n ^ 3) 挂了
- 思考思考数学问题，因为算法很多时候跟数学问题息息相关
- 看了题解
  - 有点神奇
  - 总结一下：
    - 利用的一点就是 迭代累加，如果加上这个**刚好**大于等于s，那么子数组一定是包含当前元素的。
    - 然后从子数组签名剔除元素，直到不再 >= s

### Answer:

### Others Answer:
