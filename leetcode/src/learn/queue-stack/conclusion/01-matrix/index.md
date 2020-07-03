---
date: "2020-07-01"
title: "01 Matrix"
timeSpent: 75
wrongTime: 2
withHelp: true
conquered: true
qId: 542
---

## 01 Matrix

### Question：

<p>Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.</p>

<p>The distance between two adjacent cells is 1.</p>

<p>&nbsp;</p>

<p><b>Example 1: </b></p>

<pre>
<strong>Input:</strong>
[[0,0,0],
 [0,1,0],
 [0,0,0]]

<strong>Output:</strong>
[[0,0,0],
&nbsp;[0,1,0],
&nbsp;[0,0,0]]
</pre>

<p><b>Example 2: </b></p>

<pre>
<b>Input:</b>
[[0,0,0],
 [0,1,0],
 [1,1,1]]

<strong>Output:</strong>
[[0,0,0],
 [0,1,0],
 [1,2,1]]
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>The number of elements of the given matrix will not exceed 10,000.</li>
	<li>There are at least one 0 in the given matrix.</li>
	<li>The cells are adjacent in only four directions: up, down, left and right.</li>
</ol>

### Process:
- 针对每个cell，他的val = Math.min(周围4个临近的cell的val + 1)
- 可以避免重复的运算
- 之前就是这样的递归，但是这样有个问题，循环了，左右一样，上下一样的情况处理的不好
- https://www.youtube.com/watch?v=luUo7hqLgw0
	* 看了一个视频 有了点启发，因为只有0和1，所以对1来说是 最短路径问题
- 后来没有按照视频里的解法，自己想了个办法做了这道题，突然就PASS了，激动

### Answer:

### Others Answer:
