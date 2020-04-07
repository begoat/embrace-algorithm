---
date: "2020-04-07"
title: "sellStock2"
---

## sellStock2 (47 mins)

### Question：

##### Description:
* Say you have an array for which the ith element is the price of a given stock on day i.
* Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

##### Note:
* You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

##### Examples:
```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Process:
- 一天只支持一个操作，要么买，要么买了
- 这个题目 看下来 有点像 找最大连续的上升子区间 收尾做差，不同区间累加

是这样的，提交的时候失败了两次，都是 判断 leftBoundary 存在的时候简单的使用了 (!xxx), (xxx) 而不是 === undefined 来判断

### Answer:

### Others Answer:
