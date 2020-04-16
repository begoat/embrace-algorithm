---
date: "2020-04-16"
title: "productExceptSelf"
status: false
---

## productExceptSelf (20 mins)

### Question：

##### Description:
* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

##### Constraint:
* It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

##### Note:
* Please solve it without division and in O(n).

##### Follow up:
* Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

##### Examples:
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

### Process:
- [1] => [1]
- [1,2] => [2,1]
- [1,2,3] => [2*3,1*3,1*2]
- [1,2,3,4] => [2*3*4,1*3*4,1*2*4,1*2*3]

- 写着写着 发现不是O(n)...
- 虽然通过了，有必要在研究下 的

### Answer:

### Others Answer:
