/**
 * 思路：
 * 1.选中数组其中一个，则相邻的左右两个不能选，感觉用递归
 * 
 * 法1: 递归
 * 每个元素都能选或不选
 * 从左往右遍历，选则考虑下下个，不选择考虑下个，因为当前选了则相邻的不能再选
 * todo 递归会超时，需要用备忘录优化（这里我的解法不好用备忘录，直接看动态规划的版本吧）
 * 
 * 可以类比爬楼梯递归备忘录
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let result = 0
  function helper(nums, cur, res) {
    if (cur > nums.length - 1) {
      result = Math.max(result, res)
      return
    }
    // 选
    helper(nums, cur + 2, res + nums[cur])
    // 不选
    helper(nums, cur + 1, res)
  }
  helper(nums, 0, 0)
  return result
};

/**
 *  * 法2: 动态规划
 * 因为前i个的最大值和前i-1个的最大值有关，所以可以用动态规划
 * 
 * dp方程：前i家的最大值 = 抢当前家时的最大值 + 不抢当前家时的最大值
 * dp[i]：Math.max(dp[i - 1], dp[i - 2] + nums[i])
 * 记住就好了，见多了就好了
 * 
 * @param {*} nums 
 * @returns 
 */
var rob = function(nums) {
  // 非空判断
  if (nums == null || !nums.length) {
    return 0;
  }

  const len = nums.length;
  const dp = [];
  dp[0] = 0; // 哨兵节点
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(
      // 不抢当前家
      dp[i - 1],
      // 抢当前家
      dp[i - 2] + nums[i]
    );
  }
  return dp[len];
};
console.log(rob([2,7,9,3,1]))