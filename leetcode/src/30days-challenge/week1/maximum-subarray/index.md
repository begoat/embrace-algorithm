---
date: "2020-04-06"
title: "maxSubArray"
status: false
---

## maxSubArray ( mins)

### Question：

##### Description:
* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

##### Note:
* If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

##### Examples:
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Process:
- 一开始完全无从下手，暴力求解 bruta force也没有去想。。O(n ^ 3)
- 后来做到后面有意识这道题是动态规划，还是没有去做出来
- 后来听了个youtube老哥的视频https://www.youtube.com/watch?v=jcjXgmHHpds
- 后来恍然大悟
- 主要还是证明自己的理解是对的，或者说 理解 为什么前后会有关联的过程
- 可以看到解法中sum 对应的项代表，遍历到这里的时候的最大值，
- 两种情况，一种是 前面最大值加上自己（连续下去）
- 另一种是 就是当前的值，（重新计数）
- 第一种情况，前面的最大值加上自己，这个也没有限制 是哪个区间段，不过总体两个走向，加上自己，或者从头再来，还是很有道理的。
- 主要是 没有想通，为什么 一定只有两种方式
- 为什么  不可以什么都不做。取之前的。
  - 这个我理解是 为了连续 所以要这么算，具体取不取之前的，这个最后会有定论/
- 所以 针对新值，实际有三种情况，连续下去，，重投再来，索性不管，索性不管我们不考虑，在另一个唯独考虑，处于连续性只考虑两种

### Answer:

### Others Answer:
