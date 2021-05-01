/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2021-04-28 22:07:40
 * @modify date 2021-04-28 22:07:40
 * @desc [description]
 */

/**
 * 思路：
 * 写个helper递归函数，函数中找wordDict中是否存在入参字符串s的子串，
 * 若存在，则可选择截取或者不截取，分别将截和不截剩下的字符串传入helper继续递归判断
 * （这里应该就是动态规划经典的决策问题了）；
 * 直到dict中再无匹配的项返回false，或者字符串全部匹配上了return true；
 * 
 * 优化重复子问题时遇到的问题：
 * 备忘录法：
 * 这题我的递归解法遇到的重复子问题并不一定会很多，
 * 只有在传参s刚好满足某种格式时才会导致重复计算
 * （所以在leetcode上的运行时间还可以）
 * 因为只有刚好两次截取出的子串都在字典中，且子串是之前也出现过的，才会重复计算
 * 所以备忘录法不好做（我没想到～）
 * 
 * 画dp表法
 * 参考作者dp，思路较清晰，也确实能避免重复子问题，但不好想到
 * 
 * 感悟：
 * 重复子问题可能只在某些情况下才会出现，
 * 不一定所有入参都会出现大量的重复子问题，也可能只有个别重复，或压根不重复
 * 备忘录法也就不好想出来
 * 所以这题就只能用dp画表法来优化重复子问题了
 * 也就是说不一定每题都能很容易想到备忘录和dp表
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
    const answer = []
    function helper(subStr, prevResult) {
      const len = subStr.length
      if (len === 0) {
        return
      }

      // 兼容 'a'和['a']情况
      if (len === 1) {
        const sIn = wordDict.includes(s)
          sIn && answer.push(s)
      }
      for (let i = 1; i < len; i++) {
        const leftStr = subStr.substring(0, i)
        const rightStr = subStr.substring(i, len)
        // console.log(leftStr, rightStr)
        const leftIn = wordDict.includes(leftStr)
        const rightIn = wordDict.includes(rightStr)

        if (leftIn && rightIn) {
          let nextResultArr = prevResult ? [prevResult, leftStr, rightStr] : [leftStr, rightStr]
          answer.push(nextResultArr.join(' '))
          
          // 兼容 "aaaaaaa" 和 ["aaaa","aa","a"]
          // 因为leftIn && rightIn 只能算一种答案，
          // leftStr和rightStr还有可能可以再拆分
          nextResultArr = prevResult ? [prevResult, leftStr] : [leftStr]
          helper(rightStr, nextResultArr.join(' '))

          nextResultArr = prevResult ? [prevResult, rightStr] : [rightStr]
          helper(leftIn, nextResultArr.join(' '))
        } else if (leftIn) {
          let nextResultArr = prevResult ? [prevResult, leftStr] : [leftStr]
          helper(rightStr, nextResultArr.join(' '))
        } else if (rightIn) {
          let nextResultArr = prevResult ? [prevResult, rightStr] : [rightStr]
          helper(leftIn, nextResultArr.join(' '))
        }
      }
    }
    helper(s, '')

    // 兼容 'apple'和['apple']
    wordDict.includes(s) && !answer.includes(s) && answer.push(s)

    console.log(answer)
};

const s = "catsanddog"
const wordDict = ["cat", "cats", "and", "sand", "dog"]
wordBreak(s, wordDict)
