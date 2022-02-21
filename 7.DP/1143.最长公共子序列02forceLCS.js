/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

 

示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
 

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



/**
 * 暴力枚举法的思路：
 * 最长公共子串的每个字母短串中一定都有，
 * 那用短串的每个字母去匹配长串的每个字母，
 * 若匹配到一个相同的就遍历这个字母之后的所有字母进入递归匹配
 * （若这个字母是lcs的一部分，那下一个字母肯定在当前字母的右侧；所以要遍历右侧所有的字母）
 * 
 * 15 / 44 个通过测试用例 状态：超出时间限制
 * 最后执行的输入：
 * "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
 * "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
 * 
 * 从上面15个通过，说明这题应该是全遍历到了（或者也可能过多遍历了）
 * 
 * 这题for遍历不好遍历全：
 * 1.匹配到某个相同的字母后要注意，包含这个字母的子串不一定是最长的
 * 2.lcs并不一定是连续的字母
 * 
 * 思考：
 * 怎么从暴力枚举优化成DP解法呢？
 * 对比DP解法是否能得到什么启发？
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function longestCommonSubsequence(str1, str2) {
  let answer = 0
  let lcs = ''
  let len1 = str1.length
  let len2 = str2.length
  let shortStr = len1 < len2 ? str1 : str2
  let longStr = shortStr === str1 ? str2 : str1
  let shortLen = shortStr.length
  let longLen = longStr.length

  /**
   * 递归来找lcs
   * @param {*} shortStartIndex 短串起点
   * @param {*} curChart 当前比较的字母
   * @param {*} curLen 当前公共子串长度
   * @param {*} longStartIndex 长串起点
   * @param {*} prevLCS 之前的子串（不一定最长）
   * @returns 
   */
  function dps(shortStartIndex, curChart, curLen, longStartIndex, prevLCS) {
    if (shortStartIndex === shortLen || longStartIndex === longLen) {
      answer = Math.max(answer, curLen)
      if (lcs.length < prevLCS.length) {
        lcs = prevLCS
      }
      return
    }

    for (let i = longStartIndex; i < longLen; i++) {// 遍历以longStartIndex为起点的长串的每个字母
      const longChart = longStr[i];
      if (curChart === longChart) {
        for (let j = shortStartIndex; j < shortLen; j++) { // 遍历短串右侧所有可能成为下一个的字母
          dps(j + 1, shortStr[j + 1], curLen + 1, i + 1, prevLCS + curChart)
        }
      }
    }
  }

  //较短字符串的起点i
  for (let i = 0; i < shortLen; i++) {
    //较长字符串的起点j
    for (let j = 0; j < longLen; j++) {
      dps(i, shortStr[i], 0, j, '')
    }
  }
  console.log('lcs', lcs);
  return answer
}

console.log(longestCommonSubsequence('abcde', 'ace'));

// todo dp
// dp难理解为什么 先跳过
/**
 *
  dp方程思路
  dp[i][j]：text1 到包含索引 i 为止，text2 到包含索引 j 为止，最长
    公共子序列的长度
    
  if (text1[i] === text2[j]) {
    dp[i][j] = dp[i-1][j-1] + 1;
  } else {
    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  }
  
  处理一下边界情况：在二维数组左边和上边加一列 0，因为会用到
    dp[-1][j] / dp[i][-1] / dp[-1][-1]
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  const dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));
  dp[-1] = JSON.parse( JSON.stringify(dp[0]) );
  for (let i = 0; i < len1; i++) {
    dp[i][-1] = 0;
  }
  dp[-1][-1] = 0;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[len1-1][len2-1];
};
