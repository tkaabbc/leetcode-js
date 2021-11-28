/**
 * 思路：利用回溯可以枚举所有的情况
 * 注意点：
 * 1.利用变量 left、right 分别记录剩余的左右括号数量，利用 prev 记录上一轮递归中已经形成的中间结果，当 left 和 right 都为 0，就得到一个结果，记录进 res 中。
 * Q: 但是要如何确保左右括号能组成合法的括弧呢？
 * 答: 是有不合法的，要始终限制已放入的左括号'('数量 大于等于 ')'数量才能生成合法的括号
 * 也就是当右括号剩余数量 < 左括号剩余数量时，剩余的括号就一定无法组成合法括号
 * right < left
 * 左边多放了没关系，还能用右边的来补
 * 右边多放了就补不上了
 * @param {number} n
 * @return {string[]}
 */
 let generateParenthesis = function (n) {
  let res = []

  let helper = (left, right, prev) => {
    console.log('prev',prev);
    console.log('left',left);
    console.log('right',right);
    if (left < 0 || right < 0 || right < left) {
      return
    }
    if (left === 0 && right === 0) {
      res.push(prev)
      return
    }

    helper(left - 1, right, prev + '(')
    helper(left, right - 1, prev + ')')
  }

  helper(n, n, '')
  return res
}
generateParenthesis(3)
