/**
 * 思路：
 * 1.这题关键要知道[i][j]只能从增、删、替换这几种操作得来
 * 并且 增 删 替换 这几种怎么表示
 * 并且注意：当增加或删除某个字符之后，另一个字符还是要当作匹配对象继续进行下一次的匹配的。
 *  只有替换之后，[i][j]两个都变一样了，才能接着考察[i+1][j+1]
 *  否则删除和增加都是[i][j+1]或[i+1][j]
 * 
 * 2.还有要知道所谓的这些操作并不是真的去修改word1和word2；
 * 只是在dp数组中记下来‘我这一步要怎么操作才会变得一样’
 * 并不需要真的去改变word1和2,所以word的长度是不会变的!
 * 
 * 知道这些就能写出状态转移方程了
 * 
 * 参考https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484484&idx=1&sn=74594297022c84952162a68b7f739133&chksm=9bd7fa4caca0735a1364dd13901311ecd6ec4913c8db05a1ff6cae8f069627eebe8d651bbeb1&scene=21#wechat_redirect

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

// 以下是常规的生成dp方法，稍稍多了几个判断；参考王争42节

// dp[i][j] 表示word[i]和word[j]左边字符串的最小编辑距离（包含ij）

// int[][] minDist = new int[n][m];
// for (int j = 0; j < m; ++j) { // 初始化第 0 行:a[0\.\.0] 与 b[0\.\.j] 的编辑距离
//   if (a[0] == b[j]) minDist[0][j] = j;
//   else if (j != 0) minDist[0][j] = minDist[0][j-1]+1; else minDist[0][j] = 1;
//   for (int i = 0; i < n; ++i) { // 初始化第 0 列:a[0\.\.i] 与 b[0\.\.0] 的编辑距离 if (a[i] == b[0]) minDist[i][0] = i;
//   else if (i != 0) minDist[i][0] = minDist[i-1][0]+1;
//   else minDist[i][0] = 1;
// }