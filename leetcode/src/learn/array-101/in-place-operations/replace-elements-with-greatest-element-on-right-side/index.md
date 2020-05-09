---
date: "2020-05-09"
title: "Replace Elements with Greatest Element on Right Side"
timeSpent: 0
---

## Replace Elements with Greatest Element on Right Side ( mins)

### Question：

##### Description:
* Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
* After doing so, return the array.

##### Note:
* 1 <= arr.length <= 10^4
* 1 <= arr[i] <= 10^5

##### Examples:
```
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
```

### Process:
- 看了几遍才看懂， 是真的好几遍。。。
  - 对每一个元素 都用它右边的最大的元素替代
- 典型的O(n^2)

### Answer:

### Others Answer:
