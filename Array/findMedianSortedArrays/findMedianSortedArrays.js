/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var nums = nums1.concat(nums2).sort((m, n) => m - n);
  var length = nums.length;
  var halfLen = length / 2;
  return length % 2 === 0 ? (nums[halfLen - 1] + nums[halfLen]) / 2 : nums[Math.floor(halfLen)];
};