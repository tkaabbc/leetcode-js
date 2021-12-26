/**
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

0 <= s.length <= 20
s 仅由数字组成


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 思路
 * 1.回溯，每个ip地址可以有1/2/3位，每种情况枚举一次，发现不合法的就return
 * 2.不合法的情况罗列一下
 * 3.递归出口就是截取出了四段 && 都合法
 */
/**
 * @param {string} s 剩余字符串
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = []
  
  function helper(s, prev) {
    // 4段以后还多出来字符串 不合法
    if (prev.length === 4 && s) {
      return
    }

    // 刚好 合法
    if (prev.length === 4 && !s) {
      const str = prev.join('.')
      !res.includes(str) && res.push(str)
      return
    }

    // 开头是0的话 只能是0
    if (s[0] === '0') {
      helper(s.slice(1), [...prev, s[0]])
    } else {
      let len = 3 // 每段长度最多是3
      while (len) {
        const curPart = s.slice(0, len)

        // 大于255 或者为空字符串 不合法跳过
        if (Number(curPart) > 255 || !curPart) {
          len--
          continue
        }
        helper(s.slice(len), [...prev, curPart])
        len--
      }
    }
  }
  helper(s, [])
  return res
};
console.log(restoreIpAddresses("010010"));
