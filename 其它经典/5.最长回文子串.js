/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路
 * 中心扩散法
 * 利用“回文串”中心对称的特点，往两边扩散，看最多能扩散多远。

在这里要注意一个细节：回文串在长度为奇数和偶数的时候，“回文中心”的形式是不一样的。

奇数回文串的“中心”是一个具体的字符，例如：回文串 "aba" 的中心是字符 "b"；
偶数回文串的“中心”是位于中间的两个字符的“空隙”，例如：回文串串 "abba" 的中心是两个 "b" 中间的那个“空隙”。
 */
let longestPalindrome = function (s) {
  let n = s.length
  if (n < 2) {
    return s
  }

  let begin = 0
  let max = 1

  let spread = (start, end) => {
    while (s[start] === s[end] && start >= 0 && end < n) {
      let len = end - start + 1
      if (len > max) {
        max = len
        begin = start
      }
      start--
      end++
    }
  }

  for (let mid = 0; mid < n; mid++) {
    spread(mid, mid)
    spread(mid, mid + 1)
  }

  return s.substr(begin, max)
}