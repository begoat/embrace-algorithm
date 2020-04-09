---
date: "2020-04-09"
title: "backspaceCompare"
---

## backspaceCompare (16 mins)

### Question：

##### Description:
* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

##### Note:
* 1 <= S.length <= 200
* 1 <= T.length <= 200
* S and T only contain lowercase letters and '#' characters.
* Can you solve it in O(N) time and O(1) space?

##### Examples:
```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

### Process:
- 一种想法，应该很容易实现的是 分别算出两个的值，然后对比
- 另一个想法，算一个值，然后直接验证另一个
- 第三种想法，同时指针运算两个字符串？

### Answer:

### Others Answer:
