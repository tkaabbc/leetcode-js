/**
  * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
  * 
  * 思路：
  * 设nums所有元素和为sum；则两个子集的和必须都为sum/2才是满足题意的解
  * 转为01背包：容量为sum/2的背包，物品重量nums[i]，求是否存在刚刚好装满背包的情况
 */
// todo
// 1.如何用01背包解题
// 感觉后面的两题跟背包关系不是太大，这题好像有点关系，先看看怎么解的再决定后面要不要学
// 2.如何优化为一纬数组（为了看懂别人的题解～）
// https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/gong-shui-san-xie-bei-bao-wen-ti-shang-r-ln14/
// https://mp.weixin.qq.com/s/xmgK7SrTnFIM3Owpk-emmg
