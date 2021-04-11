/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  let len1 = word1.length
  let len2 = word2.length
  let dp = genTable(len1, len2)
  console.log(dp);
  // 增
  // 删
  // 替换
  // 相等
  // dp[i][j] 表示 word1和word2长度分别为i和j时的最小编辑距离（注意是长度）
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      let chart1 = word1[i - 1]
      let chart2 = word2[j - 1]
      if (chart1 === chart2) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min.call(
          null,
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1,
        )
      }
    }
  }
  console.log(dp);
  return dp[len1][len2]
};

function genTable(y, x) {
  var arr = [];
  var n=1;
  for(var i = 0;i <= y; i++){ // 注意：这里的0表示长度为0时，就是空字符串时的编辑距离，这样比起王争的解法更方便计算
    arr[i] = [];
    arr[i][0] = i
  }
  for(var j = 0;j <= x; j++){
    arr[0][j] = j;
  }
  
  return arr
}

console.log(minDistance('abc', 'cba'));

// 以下是常规的生成dp方法，稍稍多了几个判断

// dp[i][j] 表示word[i]和word[j]左边字符串的最小编辑距离（包含ij）

// int[][] minDist = new int[n][m];
// for (int j = 0; j < m; ++j) { // 初始化第 0 行:a[0\.\.0] 与 b[0\.\.j] 的编辑距离
//   if (a[0] == b[j]) minDist[0][j] = j;
//   else if (j != 0) minDist[0][j] = minDist[0][j-1]+1; else minDist[0][j] = 1;
//   for (int i = 0; i < n; ++i) { // 初始化第 0 列:a[0\.\.i] 与 b[0\.\.0] 的编辑距离 if (a[i] == b[0]) minDist[i][0] = i;
//   else if (i != 0) minDist[i][0] = minDist[i-1][0]+1;
//   else minDist[i][0] = 1;
// }