// todo
/**
 * 思路
 * 1暴力法用三重for，还要注意不重复 时间复杂度n^3以上
 * 2排序 + 双指针：复杂度为n^2
 * 左右双指针思路
 * 向中间移动
 * 因为已经是排序过的数组，所以每找到一个都记得跳过重复的值
 * 参考https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485789&idx=1&sn=efc1167b85011c019e05d2c3db1039e6&scene=21#wechat_redirect
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = []
  nums.sort((a, b) => (a - b)) // 升序
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    const ele = nums[i];
    const target = 0 - ele
    while (left < right) {
      /**
       * 左右两个指针向中间移动
       */
      const sum = nums[left] + nums[right]
      const leftVal = nums[left]
      const rightVal = nums[right]
      if (sum > target) {
        while (left < right && nums[right] === rightVal) { // 跳过重复的；因为已经排序过，每次都跳过重复的数字就能保证最终结果中没有重复的情况
          right--
        }
      } else if (sum < target) {
        while (left < right && nums[left] === leftVal) {
          left++
        }
      } else if (sum === target) {
        ans.push([ele, leftVal, rightVal])
        while (left < right && nums[right] === rightVal) {
          right--
        }
        while (left < right && nums[left] === leftVal) {
          left++
        }
      }
    }
    while (i < nums.length && nums[i] === nums[i + 1]) { // 跳过重复的
      i++
    }
  }
  return ans
};
