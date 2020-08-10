---
date: "2020-08-10"
title: "Path Sum"
timeSpent: 30
wrongTime: 1
withHelp: false
conquered: true
qId: 112
---

## Path Sum

### Question：

<p>Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.</p>

<p><strong>Note:</strong>&nbsp;A leaf is a node with no children.</p>

<p><strong>Example:</strong></p>

<p>Given the below binary tree and <code>sum = 22</code>,</p>

<pre>
      <strong>5</strong>
     <strong>/</strong> \
    <strong>4</strong>   8
   <strong>/</strong>   / \
  <strong>11</strong>  13  4
 /  <strong>\</strong>      \
7    <strong>2</strong>      1
</pre>

<p>return true, as there exist a root-to-leaf path <code>5-&gt;4-&gt;11-&gt;2</code> which sum is 22.</p>

### Process:
- 记录每一步遍历 每一个节点的值
  - 每个叶节点 都唯一对应了一条路径

- 目的是遍历的时候计算出每个节点的值，这样的话，在判断下 叶子结点的情况，这个值是不是等于sum

### Answer:

### Others Answer:
