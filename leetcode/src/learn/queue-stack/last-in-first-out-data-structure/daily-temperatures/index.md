---
date: "2020-05-28"
title: "Daily Temperatures"
timeSpent: 0
wrongTime: 0
withHelp: false
conquered: true
qId: 739
---

## Daily Temperatures

### Question：

<p>
Given a list of daily temperatures <code>T</code>, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.  If there is no future day for which this is possible, put <code>0</code> instead.
</p><p>
For example, given the list of temperatures <code>T = [73, 74, 75, 71, 69, 72, 76, 73]</code>, your output should be <code>[1, 1, 4, 2, 1, 1, 0, 0]</code>.
</p>

<p><b>Note:</b>
The length of <code>temperatures</code> will be in the range <code>[1, 30000]</code>.
Each temperature will be an integer in the range <code>[30, 100]</code>.
</p>

### Process:
- 仔细看了下题目意思，要我们求的是相对向前这个迭代的天气值，什么时候会有一个更大值的出现
- 暂时有一种n ^ 2的思路，但是没有用到stack，先做吧，看看能不能acc

### Answer:

### Others Answer:
