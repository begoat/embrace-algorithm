---
date: "2020-04-27"
title: "Diagonal Traverse"
qIdx: 1167
---

## Diagonal Traverse (50 mins)

### Question：

##### Description:
* Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

##### Note:
* placeholder

##### Examples:
```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
```

### Process:
- O(n^2) method
- calc the max(M, N)
- rules (check in the boundary of array before, so that other lang except js won't throw error)
  - even  (0, 0)
  - odd (1, 0) (0, 1)
  - even  (0, 2) (1, 1) (2, 0)
  - odd (3, 0) (2, 1) (1, 2) (0, 3)

### Answer:

### Others Answer:
