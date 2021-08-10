/**
 * 思路
 * 1定义左右指针left，right
 * 2取中值mid判断大小，大了就在小的半边中找，小了就在大的半边中找
 * 3重复2，mid会一直逼近目标值，最终得结果
 * 
 * 总结：思路容易，边界情况非常易错，记下就好，否则得慢慢调了
 * 二分是基础，要烂熟于心
 * 
 * 这里就主要讲讲代码里的细节吧：
 * 1.首先，为什么是 while (left <= right) 而不是 while (left < right)？
 *  这是因为要考虑到 left 和 right 相等的情况，也就是查找区间里只有一个值。
 * 2.为什么 left = mid + 1，这个 +1 是什么？
 *  这是因为 mid 位置的值已经查找过了，可以往右边跳一位。
 * 3.什么情况 left 会超出 right？如果二分查找到的值一直小于目标值，left会不断右移，直到最后数组区间里只有一个值，如果此时这个目标值还是大于这个值，left 会继续加一，此时 left 会超过 right。
 *  反之，则 right 会超出 left。
 * 其它就没啥了
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 迭代解法
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) { // 等号别漏了
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1 // -1/+1 别漏了
    } else if (nums[mid] < target) {
      left = mid + 1 // + 1 是因为 mid 位置的值已经查找过了，可以往右边跳一位
    }
  }

  return -1; // 有可能没找到，记得返回-1
};

// 递归解法
var search = function(nums, target) {
  
  function binarySearch(left, right) {
    if (left > right) return -1

    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      return binarySearch(left, mid - 1,)
    } else if (nums[mid] < target) {
      return binarySearch(left + 1, right,)
    }
  }

  return binarySearch(0, nums.length - 1);
};

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

// 提示：

// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-search
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
