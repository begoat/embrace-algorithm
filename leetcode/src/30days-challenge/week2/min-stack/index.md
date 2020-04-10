---
date: "2020-04-10"
title: "MinStack"
---

## MinStack ( mins)

### Question：

##### Description:
* Design a stack that supports `push, pop, top, and retrieving the minimum element` in **constant** time.
- functionality
  * push(x) -- Push element x onto stack.
  * pop() -- Removes the element on top of the stack.
  * top() -- Get the top element.
  * getMin() -- Retrieve the minimum element in the stack.

##### Hite:
* Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)

##### Examples:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

### Process:
- 有点意思，既然是要 O(1) 这样的方式操作，就必须多保存一些信息，并且在每步操作的时候就得记录和更新。
- 一开始没想出来，看到提示恍然大悟。。。

### Answer:

### Others Answer:
