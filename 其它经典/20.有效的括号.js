/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 思路
 * 1.用栈
 * 2.遍历字符串，遇到左括号入栈，遇到右括号就取栈顶的括号判断是否是一对，如果是一对就出栈（说明这对合法）
 * 3.最后栈空了就合法，否则不合法。
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2 === 1) return false

  const stack = []
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if(['(', '{', '['].indexOf(c)) { // 遇到左括号
      stack.push(c)
    }else { // 遇到右括号
      let left = stack[stack.length - 1]
      if(
        (left === '(' && c === ')') ||
        (left === '{' && c === '}') ||
        (left === '[' && c === ']')
      ) {
        stack.pop()
      }else {
        return false
      }
    }
  }
  return stack.length === 0
};

// @lc code=end

