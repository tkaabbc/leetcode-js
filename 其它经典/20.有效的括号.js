/**
 * 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
通过次数846,059提交次数1,899,780

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 思路
 * 1.用栈
 * 2.遍历字符串，遇到左括号入栈，遇到右括号就取栈顶的括号判断是否是一对，如果是一对就出栈（说明这对合法）
 * 3.最后栈空了就合法，否则不合法。
 * 
 * 利用栈先进后出的特性，越晚进去的左括号要越先匹配
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

/**
 * 我的版本
 */
function isValid(str = '') {
  const stack = []
  const kuohaoMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  const leftKuohao = ['(', '{', '[']
  const rightKuohao = [')', '}', ']']
  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (leftKuohao.includes(ele)) {
      stack.push(ele)
    } else if (rightKuohao.includes(ele)) {
      const item = stack.pop()
      if (kuohaoMap.get(item) === ele) {
        continue
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
