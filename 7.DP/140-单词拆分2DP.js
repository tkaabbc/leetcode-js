/**
 * 说明：
 * dp[i]: s的前i个字符组成的字符串 所包含可能的拆分组合
 * i往后走，
 * j是从i为起点往前走，
 * 这样可遍历完s的所有子串
 * 不好想到
 * 
 * @param {*} s 
 * @param {*} wordDict 
 * @returns 
 */
let wordBreak = function (s, wordDict) {
  let uniqSChars = uniq(s.split(""))
  let uniqWordDictChars = uniq(wordDict.join(""))
  if (uniqSChars.length > uniqWordDictChars.length) {
    return []
  }

  let n = s.length
  if (!n) {
    return []
  }

  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = [""]

  for (let i = 1; i <= n; i++) {
    let res = []
    for (let j = i; j >= 0; j--) {
      let word = s.slice(j, i)
      // console.log('i=', i, 'j=', j, 'word=',word);
      if (wordSet.has(word)) {
        // dp[j]: 如果s.slice(j, i)在字典中
        // 再和s.slice(0, j)字符串的所有拆分可能都拼接一遍，就得到s.slice(0, i)的拼接可能了
        if (dp[j] && dp[j].length) {
          for (let prev of dp[j]) {
            res.push(prev ? prev + " " + word : word)
          }
        }
      }
    }
    dp[i] = res
  }
  // console.log('dp', dp);

  return dp[n]
}

function uniq(arr) {
  return Array.from(new Set(arr))
}

const s = "catsanddog"
const wordDict = ["cat", "cats", "and", "sand", "dog"]
wordBreak(s, wordDict)
