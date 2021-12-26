/**
 * 假设你正在爬楼梯。需要 n  阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。

1 阶 + 1 阶
2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1 阶 + 1 阶 + 1 阶
1 阶 + 2 阶
2 阶 + 1 阶
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

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
  dp[0] = 1 // 哨兵节点 从dp[2] 为2 推出
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i -2 ]
  }
  
  return dp[n]
};
