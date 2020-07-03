---
date: "2020-06-30"
title: "Flood Fill"
timeSpent: 34
wrongTime: 1
withHelp: true
conquered: true
qId: 733
---

## Flood Fill

### Question：

<p>
An <code>image</code> is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
</p><p>
Given a coordinate <code>(sr, sc)</code> representing the starting pixel (row and column) of the flood fill, and a pixel value <code>newColor</code>, "flood fill" the image.
</p><p>
To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on.  Replace the color of all of the aforementioned pixels with the newColor.
</p><p>
At the end, return the modified image.
</p>
<p><b>Example 1:</b><br />
<pre>
<b>Input:</b>
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
<b>Output:</b> [[2,2,2],[2,2,0],[2,0,1]]
<b>Explanation:</b>
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
</pre>
</p>

<p><b>Note:</b>
<li>The length of <code>image</code> and <code>image[0]</code> will be in the range <code>[1, 50]</code>.</li>
<li>The given starting pixel will satisfy <code>0 <= sr < image.length</code> and <code>0 <= sc < image[0].length</code>.</li>
<li>The value of each color in <code>image[i][j]</code> and <code>newColor</code> will be an integer in <code>[0, 65535]</code>.</li>
</p>

### Process:
- 这道题 题目意思都没有读清楚。。。
  * (also with the same color as the starting pixel)
  * 多么关键呀。。。 跟初始的同一个颜色的才会填充
- 8分钟 查阅资料后，弄懂了题目的意思
- 这道题 错了一次，因为没有判断 等于原color 不等于新color


### Answer:

### Others Answer:
