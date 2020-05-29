---
date: "2020-05-29"
title: "Evaluate Reverse Polish Notation"
timeSpent: 35
wrongTime: 1
withHelp: false
conquered: false
qId: 150
---

## Evaluate Reverse Polish Notation

### Question：

<p>Evaluate the value of an arithmetic expression in <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank">Reverse Polish Notation</a>.</p>

<p>Valid operators are <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>. Each operand may be an integer or another expression.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>Division between two integers should truncate toward zero.</li>
	<li>The given RPN expression is always valid. That means the expression would always evaluate to a result and there won&#39;t&nbsp;be any&nbsp;divide&nbsp;by zero operation.</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> [&quot;2&quot;, &quot;1&quot;, &quot;+&quot;, &quot;3&quot;, &quot;*&quot;]
<strong>Output:</strong> 9
<strong>Explanation:</strong> ((2 + 1) * 3) = 9
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> [&quot;4&quot;, &quot;13&quot;, &quot;5&quot;, &quot;/&quot;, &quot;+&quot;]
<strong>Output:</strong> 6
<strong>Explanation:</strong> (4 + (13 / 5)) = 6
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> [&quot;10&quot;, &quot;6&quot;, &quot;9&quot;, &quot;3&quot;, &quot;+&quot;, &quot;-11&quot;, &quot;*&quot;, &quot;/&quot;, &quot;*&quot;, &quot;17&quot;, &quot;+&quot;, &quot;5&quot;, &quot;+&quot;]
<strong>Output:</strong> 22
<strong>Explanation:</strong>
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
</pre>

### Process:
- Division between two integers should truncate toward zero 这句话理解不透彻导致错了一次
- 原来Js中有这样的一个方法 Math.trunc()

### Answer:

### Others Answer:
