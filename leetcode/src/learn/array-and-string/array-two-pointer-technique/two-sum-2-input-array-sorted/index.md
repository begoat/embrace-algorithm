---
date: "2020-04-29"
title: "Two Sum II - Input array is sorted"
timeSpent: 0
---

## twoSum (20 mins)

### Question：

##### Description:
* Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
* The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

##### Note:
* Your returned answers (both index1 and index2) are not zero-based.
* You may assume that each input would have exactly one solution and you may not use the same element twice.

##### Examples:
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

### Process:
- there is no assumption that the number is position so that we can filter some elements larger than target
- keep in mind that we should use two pointer technique
- In the out loop, we can fix one number and calc the rest number by substract from target.
  - use another pointer to check
- complexity is O(n^2) i think

### Answer:

### Others Answer:
