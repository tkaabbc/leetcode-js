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
const ipt = [1,2,3]
console.log(permute(ipt))

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