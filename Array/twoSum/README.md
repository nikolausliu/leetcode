# [传送门](https://leetcode-cn.com/problems/two-sum/description/)

# 题目：
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

# 示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

# 思路&过程

## v1
```javascript
var twoSum = (nums, target) => {
  nums.forEach((m, i) => {
    nums.forEach((n, j) => {
      if (m + n === target) {
        return [i, j];
      }
    });
  });
}
```
不通过，return的是`undefined`。**`forEach`的参数函数内return的值不能被`twoSum`接收**。考虑返回一个临时变量。

## v2
```javascript
var twoSum = (nums, target) => {
  var arr = [];
  nums.forEach((m, i) => {
    nums.forEach((n, j) => {
      if (m + n === target) {
        arr = [i, j];
      }
    });
  });
  return arr;
}
```
预期返回`[0,1]`,结果返回`[1,0]`。因为遍历不能中断，`[1,0]`覆盖了`[0, 1]`。

## v3
```javascript
var twoSum = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```
使用两个for循环，第二个for可以从上一个for的索引的后一位开始。for循环内return语句直接跳出循环。

注意：
- `forEach`和`for`内`return`语句的效果是不一样的。
- 使用`for`可以自定义开始循环的索引。
