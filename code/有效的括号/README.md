[#20 有效的数字](https://leetcode-cn.com/problems/valid-parentheses/)

# 解答

## 方法1

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = []
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (stack.pop() !== s[i]) {
          return false
        }
    }
  }

  return stack.length === 0
}
```

这道题没做出来，参考了网上的解答，考察了栈的知识。虽然也知道栈是**后进先出**，但完全没想到用栈来解决，只能说认识比较浅薄吧。思路：（1）遍历字符串，遇到左边括号，把对应的右边括号push进数组（2）遇到不是左边括号的字符，把数组pop一项与这个字符对比，如果不一样，直接return false。如果一样，则继续遍历（这里我第一次直接return stack.pop === s[i]，没有考虑到`([]`这样的情况）。（3）遍历结束后如果数组为空，则return true，否则false。