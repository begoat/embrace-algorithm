---
date: "2020-07-15"
title: "Symmetric Tree"
timeSpent: 55
wrongTime: 5
withHelp: false
conquered: false
qId: 101
---

## Symmetric Tree

### Question：

<p>Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).</p>

<p>For example, this binary tree <code>[1,2,2,3,4,4,3]</code> is symmetric:</p>

<pre>
    1
   / \
  2   2
 / \ / \
3  4 4  3
</pre>

<p>&nbsp;</p>

<p>But the following <code>[1,2,2,null,3,null,3]</code> is not:</p>

<pre>
    1
   / \
  2   2
   \   \
   3    3
</pre>

<p>&nbsp;</p>

<p><b>Follow up:</b> Solve it both recursively and iteratively.</p>

### Process:
- 我觉得本质上 是 先序遍历节点 成一个array，广度优先的去，这样不用递归。
- 递归的话也是BFS，用hashMap保存
- 静下心来。最基本的遍历树，你可以的

- https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/536/
- easy 的题目 没做出来，但是超时的情况有点复杂，除非也像他们一样实现一个底层的根据array生成树的函数，不然很麻烦。
- 先放一边。

### Answer:

### Others Answer:
