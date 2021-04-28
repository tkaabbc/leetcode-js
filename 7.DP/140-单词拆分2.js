/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2021-04-28 22:07:40
 * @modify date 2021-04-28 22:07:40
 * @desc [description]
 */

/**
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

const s = "a"
const wordDict = ["a"]
wordBreak(s, wordDict)
