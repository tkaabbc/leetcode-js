/**
 * 加备忘录思路
 * 把重复计算的helper(x)保存起来
 * 并且要将结果改为return res1 + res2
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 0
  let map = []
  function helper(leftN) {
    console.log('leftN', leftN);
    if (leftN === 0 || leftN === 1) { // 防止leftN - 1小于0
      return 1
    }
    if (leftN === 2) { // 防止leftN - 2小于0
      return 2
    }

    let res1, res2
    // 爬1步
    if (map[leftN - 1]) {
      res1 = map[leftN - 1]
    } else {
      res1 = helper(leftN - 1)
      map[leftN - 1] = res1
    }
    // 爬2步
    if (map[leftN - 2]) {
      res2 = map[leftN - 2]
    } else {
      res2 = helper(leftN - 2)
      map[leftN - 2] = res2
    }
    return res1 + res2
  }
  helper(n)
  console.log(helper(n));
};
climbStairs(6)
