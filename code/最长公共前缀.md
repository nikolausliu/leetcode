[#14 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

# 解答
## 方法1

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  var prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') {
        return ''
      }
    }
  }
  return prefix
}
```

思路：

1. 取数组第一项存为prefix，遍历数组剩余项。判断：
2. 如果所有剩余项前缀都是prefix，则返回prefix。
3. 如果至少有一项前缀不是prefix，就把prefix从后面截取掉一位。然后重新判断，进入第2步或第3步。
4. 边界情况的处理：（1）数组为空。（2）数组不为空但是没有共同前缀。

## 补充
我第一次的思路如下，自测通过，可是在leetcode上不通过，输出与我测试的结果不一致，不知道为什么。这里先记录一下。

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var index = 1
  var preCommonPrefix = ''
  if(strs.length === 0) return preCommonPrefix

  function fn() {
    var commonPrefix = strs[0].substring(0, index)
    var bol = strs.every(item => item.indexOf(commonPrefix) === 0)
    if (bol) {
      preCommonPrefix = commonPrefix
      if (index < strs[0].length) {
        index++
        fn(strs)
      } else {
        console.log(commonPrefix)
        return commonPrefix
      }
    } else {
      console.log(preCommonPrefix)
      return preCommonPrefix
    }
  }
  fn()
}
```