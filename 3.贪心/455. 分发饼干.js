/**
 * 思路：
 * 1对s和g从小到大排序
 * 2双指针循环 用最小块的饼干喂胃口最小的小孩即可
 * 
 * 收获：双指针可以用for来实现，也可以用while来实现
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 
 * 这个解法好像有点问题 todo
 */
var findContentChildren = function(g, s) {
  var g = g.sort()
  var s = s.sort()
  let maxNum = 0
  for (let i = 0; i < g.length; i++) {
    for (let j = maxNum; j < s.length; j++) {
      if (s[j] >= g[i]) {
        maxNum++
        break
      }
    }
  }
};
