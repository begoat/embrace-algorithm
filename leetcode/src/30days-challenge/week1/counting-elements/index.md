---
date: "2020-04-08"
title: "countElements"
---

## countElements (8 mins)

### Question：

##### Description:
* Given an integer array arr, count element x such that x + 1 is also in arr.
* If there're duplicates in arr, count them seperately.

##### Note:
* placeholder

##### Examples:
```
Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.
```

### Process:
- 有一点感觉了，看到这个题目就想到 用object 累加下，扫一遍得到所有的数据的count
- 在扫一遍，就知道所有结果了

### Answer:

### Others Answer:
