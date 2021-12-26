// todo
/**
 * 条件
 * 和 >= target
 * 连续数组
 * 长度最小
 * 
 * 思路
 * 暴力以每个元素为起点，开始往后计算总sum
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

};
/**
 * 滑动窗口
 * 右边不断向右移动扩大，满足条件就记下，并左边的缩小一位
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/chang-du-zui-xiao-de-zi-shu-zu-by-leetcode-solutio/
 * @param {*} target 
 * @param {*} nums 
 */
var minSubArrayLen = function(target, nums) {
  let left = 0
  let right = 0
  let answer = Number.MAX_SAFE_INTEGER
  let sum = nums[0]
  while (right < nums.length) {
    if (sum >= target) {
      answer = Math.min(answer, right - left + 1)
      if (answer === 1) return answer //1已经是最小了，不用再算了直接返回结果
      sum -= nums[left]
      left++
    } else {
      right++
      sum += nums[right]
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer
};