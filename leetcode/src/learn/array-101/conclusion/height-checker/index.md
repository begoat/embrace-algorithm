---
date: "2020-05-09"
title: "Height Checker"
timeSpent: 10
---

## Height Checker (10 mins)

### Question：

##### Description:
* Students are asked to stand in non-decreasing order of heights for an annual photo.
* Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
* Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

##### Constraints:
* 1 <= heights.length <= 100
* 1 <= heights[i] <= 100

##### Examples:
```
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation:
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.

Input: heights = [5,1,2,3,4]
Output: 5

Input: heights = [1,2,3,4,5]
Output: 0
```

### Process:
- 这道题主要是理解题意
  - 哪些学生是不要懂的
- 一个排序一个对比
- 一个insertion sort 就可以走天下了

### Answer:

### Others Answer:
