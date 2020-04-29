---
date: "2020-04-28"
title: "Implement strStr()"
qIdx: 1161
---

## Implement strStr() (20 mins)

### Question：

##### Description:
* Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).
* Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

##### Clarification:
* What should we return when needle is an empty string? This is a great question to ask during an interview.
* For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

##### Examples:
```
Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

### Process:
- convert the input string into array
- use a simple for loop the check whether equality
- complexity is O(n)

### Answer:

### Others Answer:
