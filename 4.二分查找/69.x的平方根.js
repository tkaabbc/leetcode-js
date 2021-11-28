/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2
示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 

提示：

0 <= x <= 231 - 1


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * 思路
 * 二分查找
 * 要么刚好等于x
 * 要么left和right相等时 代表为小数 已经逼近答案 也符合题意
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let ans = -1
  while(left <= right) {
      const mid = Math.floor((right + left)/2)
      const result = mid*mid
      if(result === x) {
          return mid
      }
      if (result > x) {
          right = mid - 1
      } else {
        // 最后的一个mid不要加1
          ans = mid
          left = mid + 1
      }
  }
  return ans
};