/**
 * 
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路
 * 每次取不同的值，把之前拼的prev传递递归下去就好了
 * @param {*} nums 
 * @returns 
 */
function permute(nums) {
  const n = nums.length
  if (n === 1) {
    return [nums]
  }
  const res = []
  const helper = (nums, prev) => {
    if (prev.length === n) {
      res.push(prev)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      const use = nums[i]
      const rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
      helper(rest, [...prev, use])
    }
  }
  helper(nums, [])
  return res
}
const ipt = [1,2,3]
console.log(permute(ipt))

/**
 * 思路：
 * 写一个递归，每次都面临多种use的选择，for遍历所有use，最终拼接起来返回，递归就能得到所有情况
 * @param {*} params 
 */
function permute(nums) {
  const n = nums.length
  if (n === 1) {
    return nums
  }
  const res = []
  for (let i = 0; i < nums.length; i++) {
    const use = nums[i]
    const rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
    const restPermutes = permute(rest)
    console.log('use',use);
    console.log('restPermutes',restPermutes);
    for (const restPermute of restPermutes) { // Q1
      res.push([use].concat(restPermute))
    }
  }
  return res
}
// const ipt = [1,2,3]
// console.log(permute(ipt))


/**
 * Q1 这里要forof遍历是因为permute函数的返回值必须是一个二维数组
 * （因为最终的结果是二维，这里既用作最终答案，又用作计算过程，要考虑到这一点），
 * 里面那一层才是我们要计算过程中所需要的
 * 
 * 难点：
 * 1每个位置要放的数字都从 剩下的数字中选一个值出来
 * 2注意这里用代码表示 剩下的数字 的办法：const rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
 * 3即去掉已选值之后的数组
 */