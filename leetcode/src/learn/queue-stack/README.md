* 为什么 BFS Breadth-first search 要queue呢？
  - 因为相当于一级一级来嘛，距离为0的，距离为1的，距离为2的 ...

* 为什么 DFS Depth-fisrt search 要stack呢？
  - 因为相当于依次深度找，中间的都放到栈上，同时记录已经找到过的，然后每次出栈的时候判断已经找到过的（操作过的）在进行输出