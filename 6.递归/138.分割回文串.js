/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 

提示：

1 <= s.length <= 16
s 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-partitioning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string[][]}
 */

 let partition = function (s) {
  let n = s.length
  let ret = []
  let find = function (start, prev) {
    // 最少分割一个字符 最多分割到末尾前一位
    for (let i = 1; i <= n; i++) {
      let end = start + i
      let cur = s.substring(start, end)
      if (cur) {
        let res = prev.concat(cur)
        if (isPalindrome(cur)) {
          if (end === n) {
            console.log('cur', cur, 'start', start, 'end', end, 'i', i)
            ret.push(res)
          } else {
            find(start + i, res)
          }
        }
      }
    }
  }
  find(0, [])
  console.log(ret);
  return ret
}

/**
 * 判断是否为回文串
 * 思路
 * 头尾双指针往中间移动对比
 * @param {*} s 
 * @returns 
 */
function isPalindrome(s) {
  if (!s) {
    return false
  }
  let i = 0
  let j = s.length - 1

  while (i < j) {
    let head = s[i]
    let tail = s[j]

    if (head !== tail) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
}
partition('aab')