---
date: "2020-05-28"
title: "Perfect Squares"
timeSpent: 30
wrongTime: 0
withHelp: false
conquered: false
qId: 279
---

## Perfect Squares

### Question：

<p>Given a positive integer <i>n</i>, find the least number of perfect square numbers (for example, <code>1, 4, 9, 16, ...</code>) which sum to <i>n</i>.</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input:</b> <i>n</i> = <code>12</code>
<b>Output:</b> 3
<strong>Explanation: </strong><code>12 = 4 + 4 + 4.</code></pre>

<p><b>Example 2:</b></p>

<pre>
<b>Input:</b> <i>n</i> = <code>13</code>
<b>Output:</b> 2
<strong>Explanation: </strong><code>13 = 4 + 9.</code></pre>

### Process:
- 有点棘手，一时间不知道怎么处理
- 首先肯定都是可以的，因为 大不了都是1，返回就是这个数本身嘛
- 然后有点像动态规划的问题？因为依赖于之前的
- 就是一个划分成子问题，分而治之去求解的过程，同时记录已经求过的值避免重复计算
* 不知道为什么会出现在队列里面

### Answer:

### Others Answer:
