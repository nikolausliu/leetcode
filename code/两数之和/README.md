[#1 两数之和](https://leetcode-cn.com/problems/two-sum/)

# 解答

## 方法1
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};
```

两层for循环遍历，遍历的当前项相加等于target即可。