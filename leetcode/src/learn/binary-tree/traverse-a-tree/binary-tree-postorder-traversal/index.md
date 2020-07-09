---
date: "2020-07-09"
title: "Binary Tree Postorder Traversal"
timeSpent: 32
wrongTime: 0
withHelp: true
conquered: false
qId: 145
---

## Binary Tree Postorder Traversal

### Question：

<p>Given a binary tree, return the <em>postorder</em> traversal of its nodes&#39; values.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong>&nbsp;<code>[1,null,2,3]</code>
   1
    \
     2
    /
   3

<strong>Output:</strong>&nbsp;<code>[3,2,1]</code>
</pre>

<p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p>

### Process:
- ！！！看了自己中序遍历的代码，发现，除了先序遍历，其他的都需要调整栈的位置，先pop 了 top之后，在重新将left right，按照位置给push到栈中，同时标记，见过，第二次见的时候，说明已经遍历过了完成了，该打印了。

### Answer:

### Others Answer:
