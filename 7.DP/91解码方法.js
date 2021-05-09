/**
 * 基本递归
 * 未加备忘录会重复计算导致超时
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let result = 0
  const maxIndex = s.length - 1
  function helper(s, index) {
    if (maxIndex + 1 === index) { // index落在maxIndex + 1，表示刚刚好匹配完所有s，就算是一次合格的解码方法
      return 1
    }

    if (maxIndex + 1 < index) { // index超出maxIndex + 1，表示之前的解码方法行不通
      return 0
    }
    if (s[index] === '0') {
      return
    }
    const twoChar = s[index] + s[index + 1]
    
    // 1个字符
    helper(s, index + 1)
    // 2个字符
    if (Number(twoChar) <= 26) {
      helper(s, index + 2)
    }
  }
  helper(s, 0)
  return result
};

function isZeroStr(str) {
  return Number(str) === 0
}

numDecodings('227')
