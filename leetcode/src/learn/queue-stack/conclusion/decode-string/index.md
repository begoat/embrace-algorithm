---
date: "2020-06-30"
title: "Decode String"
timeSpent: 37
wrongTime: 1
withHelp: false
conquered: true
qId: 394
---

## Decode String

### Question：

<p>Given an encoded string, return its decoded string.</p>

<p>The encoding rule is: <code>k[encoded_string]</code>, where the <i>encoded_string</i> inside the square brackets is being repeated exactly <i>k</i> times. Note that <i>k</i> is guaranteed to be a positive integer.</p>

<p>You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.</p>

<p>Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, <i>k</i>. For example, there won&#39;t be input like <code>3a</code> or <code>2[4]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "3[a]2[bc]"
<strong>Output:</strong> "aaabcbc"
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "3[a2[c]]"
<strong>Output:</strong> "accaccacc"
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "2[abc]3[cd]ef"
<strong>Output:</strong> "abcabccdcdcdef"
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> s = "abc3[cd]xyz"
<strong>Output:</strong> "abccdcdcdxyz"
</pre>

### Process:
- 这个乍一看跟 什么 栈实现的四则运算有异曲同工之妙，四则运算的原则是右边括号不入栈，这个也是一样
- 从左边开始扫描，压栈，遇到右边的括号，就处理下，处理到最近的左括号为止。
- js的基础知识 join方法 不传参数默认会认为是 ','这个点我忘记了，我以为直接就是没有separator了。。。

### Answer:

### Others Answer:
