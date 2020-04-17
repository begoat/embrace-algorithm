---
date: "2020-04-17"
title: "Valid Parenthesis String"
---

## Valid Parenthesis String (30 mins)

### Question：

##### Description:
* Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
  * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
  * Any right parenthesis ')' must have a corresponding left parenthesis '('.
  * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
  * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
  * An empty string is also valid.

##### Note:
* The string size will be in the range [1, 100].

##### Examples:
```
Input: "()"
Output: True

Input: "(*)"
Output: True

Input: "(*))"
Output: True
```

### Process:
- 这道题 一开始就想到要用栈来实现，潜移默化的，感谢郑老师。
- 按照常规的题目，比如计算器的提示，就是左边括号入栈，右边的括号不入栈，而是遇到了就弹出计算因子开始计算，然后右括号 消除掉 栈中的左边括号
- 但是这道题引入了可以为 (、)三种字符的 *号，这就让小黄我有点困惑了
- 但是小黄在最近做算法题的时候，看到一些很好用的模式，比如 保存一些额外的信息，即用空间换取时间
- 所以我们可以不可以在栈中保存当前节点可见的符号数量，如果事先遍历一遍，提前算出总的数量，那就知道未来还有多少数量
- 思路我觉得就是这个思路，这个解法就是O(n)

---
- ['(',')'] =>

### Answer:

### Others Answer:
