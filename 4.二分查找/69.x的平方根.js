/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let ans = -1
  while(left <= right) {
      const mid = Math.floor((right + left)/2)
      const result = mid*mid
      if(result === x) {
          return mid
      }
      if (result > x) {
          right = mid - 1
      } else {
        // 最后的一个mid不要加1
          ans = mid
          left = mid + 1
      }
  }
  return ans
};