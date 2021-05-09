/**
 * 思路
 * 思路基本和爬楼梯递归备忘录一致
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const maxIndex = s.length - 1
  const map = []

  function helper(s, index) { // index为当前考察的字符起点
    if (maxIndex + 1 === index) { // index落在maxIndex + 1，表示刚刚好匹配完所有s，就算是一次合格的解码方法
      return 1
    }

    if (maxIndex + 1 < index) { // index超出maxIndex + 1，表示之前的解码方法行不通
      return 0
    }

    if (s[index] === '0') { // 第一个字为0时不满足
      return 0
    }

    const twoChar = s[index] + s[index + 1]
  
    let res1 = 0
    let res2 = 0

    if (map[index + 1]) {
      // 1个字符
      res1 = map[index + 1]
    } else {
      res1 = helper(s, index + 1)
      map[index + 1] = res1
    }

    if (Number(twoChar) <= 26) {
      if (map[index + 2]) {
        // 2个字符
        res2 = map[index + 2]
      } else {
        res2 = helper(s, index + 2)
        map[index + 2] = res2
      }
    }

    return res1 + res2
  }

  return helper(s, 0)
};

function isZeroStr(str) {
  return Number(str) === 0
}

console.log(numDecodings('226'));