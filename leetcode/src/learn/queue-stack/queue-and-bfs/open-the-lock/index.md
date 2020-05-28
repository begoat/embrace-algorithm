---
date: "2020-05-28"
title: "Open the Lock"
timeSpent: 63
wrongTime: 0
withHelp: false
conquered: false
qId: 753
---

## Open the Lock

### Question：

<p>
You have a lock in front of you with 4 circular wheels.  Each wheel has 10 slots: <code>'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'</code>.  The wheels can rotate freely and wrap around: for example we can turn <code>'9'</code> to be <code>'0'</code>, or <code>'0'</code> to be <code>'9'</code>.  Each move consists of turning one wheel one slot.
</p><p>
The lock initially starts at <code>'0000'</code>, a string representing the state of the 4 wheels.
</p><p>
You are given a list of <code>deadends</code> dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
</p><p>
Given a <code>target</code> representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.
</p>

<p><b>Example 1:</b><br />
<pre>
<b>Input:</b> deadends = ["0201","0101","0102","1212","2002"], target = "0202"
<b>Output:</b> 6
<b>Explanation:</b>
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".
</pre>
</p>

<p><b>Example 2:</b><br />
<pre>
<b>Input:</b> deadends = ["8888"], target = "0009"
<b>Output:</b> 1
<b>Explanation:</b>
We can turn the last wheel in reverse to move from "0000" -> "0009".
</pre>
</p>

<p><b>Example 3:</b><br />
<pre>
<b>Input:</b> deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
<b>Output:</b> -1
<b>Explanation:</b>
We can't reach the target without getting stuck.
</pre>
</p>

<p><b>Example 4:</b><br />
<pre>
<b>Input:</b> deadends = ["0000"], target = "8888"
<b>Output:</b> -1
</pre>
</p>

<p><b>Note:</b><br>
<ol>
<li>The length of <code>deadends</code> will be in the range <code>[1, 500]</code>.</li>
<li><code>target</code> will not be in the list <code>deadends</code>.</li>
<li>Every string in <code>deadends</code> and the string <code>target</code> will be a string of 4 digits from the 10,000 possibilities <code>'0000'</code> to <code>'9999'</code>.</li>
</ol>
</p>

### Process:
- 这是一个树结构的问题，从0000开始，只改变一个值，就可以有8种变化，依此类推，每一个分支又可以产生8个分支
- 所以就是搜索所有的子树，找到target的过程
- 目标叶节点的所在的层级，就是我们想要的result
- 其中在deadends里面的子树，都是不能再衍生的子树
- 因为可以一致的转动，所以如何判定之前转过了呢？用个hashTable去维护
- 基本就是这个思路，不过得注意下 最少的这个条件，minimal
  - 其实在算法中 先进先出 最早return的 我觉得就是最小的了。。。

- 做出来了，卡的一个步骤在于 oneStepMove 的算法写错了 Number(xx) + 1 ，写成了  Number(xx + 1) ...

### Answer:

### Others Answer:
