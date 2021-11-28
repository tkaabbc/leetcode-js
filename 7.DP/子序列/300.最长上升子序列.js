/**
 * 思路
 * dp[i]含义：表示以 nums[i] 这个数结尾的最长递增子序列的长度。（序列以nums[i]结尾）
 * PS：为什么这样定义呢？这是解决所有子序列问题的一个套路，记住就好，算法是后验性的，只能这么定义能解出来。
 * 参考https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    // i与i前面的元素比较
    for (let j = 0; j < i; j++) {
      // 找比i小的元素，每找到一个，就让当前序列的最长子序列长度加1
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // 找出最大的子序列
  return Math.max(...dp);
};
