/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combinations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路
 * 组合的思路是只考虑后面的情况，用过的值不要用，不管前面
 * start和prev是精髓
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
let combine = function (n, k) {
  let res = []

  let helper = (start, prev) => {
    if (prev.length === k) {
      res.push(prev)
      return
    }
    for (let i = start; i <= n; i++) {
      helper(i + 1, [...prev, i])
    }
  }
  helper(1, [])
  return res
}
console.log(combine(4, 2));