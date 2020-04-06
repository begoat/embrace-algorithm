---
date: "2020-04-05"
title: "Happy Number"
---

## Happy Number (48mins)

### Question：

##### Description:
* Write an algorithm to determine if a number is "happy".
* A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

<!-- ##### Note:
* Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? -->

##### Examples:
```
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

### Process:
1. 保存计算过的部分，这个有助于减少循环的次数
2. 如何judge死循环呢？

- **这两个可能得放在一起考虑，保存的是一个数组，
递归函数把计算过程也带上去了，如果数组中出现已经算过了，那么就证明有循环了，判定false**

### Answer:

### Others Answer: