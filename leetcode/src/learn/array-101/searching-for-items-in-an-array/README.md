### Search in an Array

1. Linear Search
  - If the index is not known, which is the case most of the time, then we can check every element in the Array. We continue checking elements until we find the element we're looking for, or we reach the end of the Array. This technique for finding an element by checking through all elements one by one is known as the linear search algorithm. In the worst case, a linear search ends up checking the entire Array. Therefore, the time complexity for a linear search is O(N)O(N).

2. Binary Search
  - There is another way of searching an Array. If the elements in the Array are in sorted order, then we can use binary search.
  - Binary search is where we repeatedly look at the middle element in the Array, and determine whether the element we're looking for must be to the left, or to the right. Each time we do this, we're able to halve the number of elements we still need to search, making binary search a lot faster than linear search!