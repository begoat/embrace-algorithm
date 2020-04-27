---
date: "2020-04-27"
title: "Spiral Matrix"
---

## Spiral Matrix (55 mins)

### Question：

##### Description:
* Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

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
Output: [1,2,3,6,9,8,7,4,5]

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Process:
- use a variable to record direction( (0,1,2,3) % 4 ) means four direction, selfAdd if exceed the boundary
- use i,j to loop

- after seeing hints of that problems by others, a more space saving method is maybe keep track of the row/col that have been scaned.

### Answer:

### Others Answer:
