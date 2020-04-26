---
date: "2020-04-26"
title: "Find Pivot Index"
qIdx: 1144
---

## pivotIndex (20+ mins)

### Question：

##### Description:
* Given an array of integers nums, write a method that returns the "pivot" index of this array.
* We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.
* If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

##### Note:
* The length of nums will be in the range [0, 10000].
* Each element nums[i] will be an integer in the range [-1000, 1000].

##### Examples:
```
Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.

Input:
nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

### Process:
- O(n^2) solution(direct solution):
  - iterate the given array, calc sum of numbers to the left and sum of numbers to the right
  - if match the condition, then return it.
    * because we iterate from left to right, so the first will be pivot
- O(n)
  - can we record something more during loop, so that we won't calc the sum every time
  - yes we can
    - we need pre-calc the sum of all items in the array
    - then in another non-nested for-loop
      - for the first item, we know the left is 0, right to current item is the sum subtract current item
        - we store the left in an temp variable
      - the rest item, we just need add variable and prev-item so that we can know the left sum



### Answer:

### Others Answer:
