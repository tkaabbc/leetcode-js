
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
