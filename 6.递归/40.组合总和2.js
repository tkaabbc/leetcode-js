/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/**
 * todo
 * 思路
 * 这题主要要理解这两个限制的解决办法
 * 1candidates 中的每个数字在每个组合中只能使用一次。
 * 2解集不能包含重复的组合
 * 
 * 1解决：只考虑身后事
 * 2解决：
 * 避免顺序不同的相同解：先把数组排序后再求解，这样就不会出现顺序不同的相同解了
 * 防止重复：把数组拼接成 key字符串 [1, 2, 7] -> "1 ~ 2 ~ 7"，在map中标为true表示已生成
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 let combinationSum2 = function (candidates, target) {
  let res = []

  if (!candidates.length) {
    return res
  }

  candidates.sort()

  let used = {}

  let helper = (start, prevSum, prevArr) => {
    // 由于全是正整数 所以一旦和大于目标值了 直接结束本次递归即可。
    if (prevSum > target) {
      return
    }
    // 目标值达成
    if (prevSum === target) {
      let key = genKey(prevArr)
      if (!used[key]) {
        res.push(prevArr)
        used[key] = true
      }
      return
    }

    for (let i = start; i < candidates.length; i++) {
      // 这里还是继续从start本身开始 因为多个重复值是允许的
      let cur = candidates[i]
      let sum = prevSum + cur
      let arr = prevArr.concat(cur)
      helper(i + 1, sum, arr)
    }
  }

  helper(0, 0, [])

  return res
}

let genKey = (arr) => arr.join("~")