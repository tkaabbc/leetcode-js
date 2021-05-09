/**
 * 思路：
 * 最基本的递归解法，会超时
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 0
  function helper(leftN) {
    if (leftN === 0) {
      result += 1
      return
    }
    if (leftN < 0) {
      return
    }

    // 爬1步
    helper(leftN - 1)
    // 爬2步
    helper(leftN - 2)
  }
  helper(n)
  return result
};
