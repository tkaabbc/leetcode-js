/**
 * 给定一个无重复元素的数组  candidates  和一个目标数  target ，找出  candidates  中所有可以使数字和为  target  的组合。

candidates  中的数字可以无限制重复被选取。

说明：

所有数字（包括  target）都是正整数。
解集不能包含重复的组合。

示例 1:

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:

输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */
/**
 * 思路
 * 常规求组合 + 每个阶段中判断一下总和是否达到目标
 * 
 * 注意：
 *  这里允许重复 所以helper(i, sum, arr)是传i而不是i+1了
 *  因为允许重复，所以每个位置都有n种选择
 *  不允许重复时，第一位n种选择，第二位n-1依次类推 （考虑身后事）
 */
 let combinationSum = function (candidates, target) {
  let res = []

  let helper = (start, prevSum, prevArr) => {
    // 由于全是正整数 所以一旦和大于目标值了 直接结束本次递归即可。
    if (prevSum > target) {
      return
    }
    // 目标值达成
    if (prevSum === target) {
      res.push(prevArr)
      return
    }

    for (let i = start; i < candidates.length; i++) {
      let cur = candidates[i]
      let sum = prevSum + cur
      let arr = prevArr.concat(cur)
      // 这里还是继续从i本身开始 因为多个重复值是允许的，相当于每次都有n种选择[2, 2, 2, 2]
      helper(i, sum, arr)
    }
  }

  helper(0, 0, [])

  return res
}