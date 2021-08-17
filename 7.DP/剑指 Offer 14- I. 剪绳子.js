/**
 * 
 * todo:超出时间限制
 * 这题用暴力递归会超出时间限制，需要用dp优化
 * 
 * 
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  // 最大值
  let max = 0
  // 最大裁剪方案
  let arr = []

  /**
   * 
   * @param {*} restLen 绳子剩余长度
   * @param {*} ansArr 已剪绳子
   */
  function helper(restLen, ansArr) {
    console.log(restLen, ansArr);

    if (ansArr.length > 1) {
      // 乘积
      const result = ansArr.reduce((pre, cur) => pre * cur)
      if (result > max) {
        max = result
        arr = ansArr
      }
    }

    // i: 剪去i长度
    for (let i = 1; i <= restLen; i++) {
      
      helper(restLen - i, [...ansArr, i])
    }
  }

  helper(n, [])

  return max
};
console.log(cuttingRope(10));

// todo dp解法
/**
 * 思路：
 * 关键是要能绕过来f(8) = max(f(i) x f(8-i))
 * 这样就能记下每个阶段的最优解，能省去大量重复计算
 */
