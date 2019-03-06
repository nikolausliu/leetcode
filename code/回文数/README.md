[#9 回文数](https://leetcode-cn.com/problems/palindrome-number/submissions/)

# 解答

## 方法1

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    var str = x.toString()
    if(str.split('').reverse().join('') === str) {
        return true
    }
    return false
};
```

首先负数肯定不是回文数所以排除。然后抓住回文数的特点：前后读起来一样。如果字符串颠倒以后还是和原字符串一样那就对了，所以考虑先把数字转字符串，然后转数组并reverse，再转回字符串和原字符串比较。

## 方法2

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  var str = x.toString()
  if (str.split('').reverse().join('') === str) {
    return true
  }
  return false
};
```
这种方法不需要额外字符串空间，直接比较数字，我没想到这种方法。解答参考官方解答。
