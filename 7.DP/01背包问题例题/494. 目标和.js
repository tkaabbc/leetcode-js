// todo
/**
 * 本质是把选+/-转换一下思路成选或者不选
 * 解：
 * 假设题目要求的目标和为target
 * 假设所有符号为+的元素和为x，符号为-的元素和的绝对值是y。
 * target = 正数和 - 负数和 = x - y
 * 而已知x与y的和是数组总和：x + y = sum
 * 综上可得 x = (target + sum) / 2
 * x即可看成背包容量bagCapacity
 * 所以，题目可转为：装满容量为x的背包，有几种装法？
 * 
 * dp方程
 * dp[j] = dp[j] + dp[j - nums[i]]
 * 当前ij的方法数 = 不选当前物品的方法数 + 选当前物品的方法数
 * （因为每个物品可以选/不选，这里跟01背包思路一样）
 * 注意：dp[0] = 1
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {

};