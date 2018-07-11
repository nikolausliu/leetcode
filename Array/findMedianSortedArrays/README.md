# [传送门](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/)

# 题目：
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

# 示例1：
```
nums1 = [1, 3]
nums2 = [2]

中位数是 2.0
```
# 示例2：
```
nums1 = [1, 2]
nums2 = [3, 4]

中位数是 (2 + 3)/2 = 2.5
```

# 思路&过程
中位数的作用：
> 将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。

## v1
```javascript
var findMedianSortedArrays = function(nums1, nums2) {
  var nums = nums1.concat(nums2).sort();
  var length = nums.length;
  var halfLen = length / 2;
  return length % 2 === 0 ? (nums[halfLen - 1] + nums[halfLen]) / 2 : nums[Math.floor(halfLen)];
};
```
测试用例：`[1],[2,3,4,5,6,7,8,9,10]`。预期：5.5，结果：4.5。不通过。原因：`sort`方法的排序不符合预期。

## v2
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
  var nums = nums1.concat(nums2).sort((m, n) => m - n);
  var length = nums.length;
  var halfLen = length / 2;
  return length % 2 === 0 ? (nums[halfLen - 1] + nums[halfLen]) / 2 : nums[Math.floor(halfLen)];
};
```
给`sort`传一个函数，使数组按升序排序。

注意：
- `sort`方法的使用
