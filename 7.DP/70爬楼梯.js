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


/**
 * dp法
 * 爬i级楼梯的方法数 = 最后爬两级的方法数 + 最后爬一级的方法数
 * @param {*} n 
 * @returns 
 */
var climbStairs = function (n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i -2 ]
  }
  
  return dp[n]
};
