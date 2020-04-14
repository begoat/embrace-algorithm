---
date: "2020-04-14"
title: " Contiguous Array"
---

## Contiguous Array (50 mins)

### Question：

##### Description:
* Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

##### Note:
* The length of the given binary array will not exceed 50,000.

##### Examples:
```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

### Process:
- 首先 第一次题目理解错了，以为 连续的01/10的数量
- 其实 应该是 00001111，也算
- 能不能遍历数组，记录一遍每个节点的信息
  * [0, 1, 0, 0, 0, 1, 1]
  * =>
  * 0: {0: 1, 1: 0}
  * 1: {0: 1, 1: 1}
  * 0: {0: 2, 1: 1}
  * 0: {0: 3, 1: 1}
  * 0: {0: 4, 1: 1}
  * 1: {0: 4, 1: 2}
  * 1: {0: 4, 1: 3}

- 感觉上面的解法挺有意思，但是怎么证明他是对的呢？怎么证明连续的一组数据就是正确的呢
- [0,1,1,0,1,1,1,0] 这个数组 证明，我的方法是错的， 没有连续。
- 确实哦，我这个没有判断连续，那么如何包含这种情况呢
- 我的结论是这样基本是错的，又不是让你找从数组的一开始，有多少个同样的0、1，没必要保留从0开始的有多少个0，1
- **动态规划，len每增加一，当前最优解，要么是不用新增的值，要么是使用新增的值**
- 没用动态规划想出来，大佬也没有嘿嘿嘿
- 我想到 每个节点 保存 已经有的0和1的值了，
- 但是 最后判断结果的一步错了，应该是 0和1个数相等的点是平衡点，两个平衡点之间0，1的个数一定是相等的，所以返回的就是最大的两个平衡点的距离
- 平衡点 不一定是 0、1个数相等的点，
- 而是 每个节点累计 0，1计算下来，画出这样一条线，y值相等的点之间的最远距离就是结果
- 开心，豁然开朗

### Answer:

### Others Answer:
