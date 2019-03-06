[#13 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/submissions/)

# 解答

## 方法1

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0
  // if (s.includes("IV") || s.includes("IX")) result -= 2
  // if (s.includes("XL") || s.includes("XC")) result -= 20
  // if (s.includes("CD") || s.includes("CM")) result -= 200
  var lenOfIV = s.match(/IV/g) ? s.match(/IV/g).length : 0
  var lenOfIX = s.match(/IX/g) ? s.match(/IX/g).length : 0
  var lenOfXL = s.match(/XL/g) ? s.match(/XL/g).length : 0
  var lenOfXC = s.match(/XC/g) ? s.match(/XC/g).length : 0
  var lenOfCD = s.match(/CD/g) ? s.match(/CD/g).length : 0
  var lenOfCM = s.match(/CM/g) ? s.match(/CM/g).length : 0
  result -= ((lenOfIV + lenOfIX) * 2 + (lenOfXL + lenOfXC) * 20 + (lenOfCD + lenOfCM) * 200)
  for (let c of s) {
    switch (c) {
      case "I":
        result += 1
        break
      case "V":
        result += 5
        break
      case "X":
        result += 10
        break
      case "L":
        result += 50
        break
      case "C":
        result += 100
        break
      case "D":
        result += 500
        break
      case "M":
        result += 1000
        break
    }
  }

  return result
}
```

## 方法2
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var romanObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let max = 0
  let result = 0
  for (var i = s.length - 1; i >= 0; i--) {
    var currRoman = s[i]
    var currVal = romanObj[currRoman]
    result += currVal >= max ? currVal : -currVal
    max = Math.max(max, currVal)
  }
  return result
}
```

两种方法都是网上的答案，第一种方法有缺陷，修改了一下。

主要还是没抓住罗马数字的规则：

1. 一般来说罗马数字都是左边大右边小，把各个字母代表的数字相加就是代表的整数。
2. 只有6种组合会出现左边小右边大:IV,IX,XL,XC,CD,CM。遇到这6种情况，需要大数减小数，得到的结果就是这个组合代表的数字。比如IV就是5-1结果是4。
3. 根据第2步，可以推导出：IV和IX比原来相加的规则下得到的结果少2，XL和XC少20，CD和CM少200。根据这个规律，可以把所有字母相加的结果减去特殊组合应该减少的数就能得到最终的结果。