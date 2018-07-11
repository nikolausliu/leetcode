# [传送门](https://leetcode-cn.com/problems/container-with-most-water/description/)

# 题目：
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。画 n 条垂直线，使得垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

注意：你不能倾斜容器，n 至少是2。

# 说明：
题目比较简短，需要理解清除它的意思。举个栗子：给定数组`[8, 3, 9, 7]`,那么坐标系中的4个点就分别是`(0, 8) (1, 3) (2, 9), (3,7)`。过这些点向x轴做垂线，得到4条垂线。任取两条垂线正好可以和x轴构成一个容器。`每个容器可以容纳水的体积 = 这个容器的较短的边的高度（较短的垂线的长度）* 这个容器的宽度（在x轴上的跨度）`。

# 思路及过程
理解了题意，比较容易想到的就是用两个for循环

## 暴力法
```javascript
var maxArea = function (height) {
  var areas = [];
  for (var i = 0; i < height.length; i++) {
    for (var j = 0; j < height.length; j++) {
      areas.push(Math.min(height[i], height[j]) * (j - i));
    }
  }

  return Math.max(...areas);
};
```
这种方法在传入的数组长度较小时可以正常运行。但一旦遇到一个很长的数组，就会报错`Maximum call stack`, 堆栈溢出。

## 双指针法
```javascript
var maxArea = function (height) {
  var maxarea = 0,
    l = 0,
    r = height.length - 1;
  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * [r - l]);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxarea;
};
```
双指针法是看答案的...这种方法很巧妙。可以简单这样理解：
1. 先选最左边的垂线和最右边的垂线，计算出它的容积。
2. 如果左边的垂线比右边的垂线低，就把容器的左边界往右移动一个垂线单位。计算新的容器的容积，并和上一个容积相比，把大一点的那个记下来。
3. 如果右边的垂线比左边的垂线低，就把容器的有边界往做移动一个垂线单位。计算新的容器的容积，并和上一个容积相比，把大一点的那个记下来。
4. 重复步骤2-3，直到不能再移动为止。输出最后一步记下来的那个容积值。

`maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * [r - l]);`这句代码感觉运用的很巧妙。