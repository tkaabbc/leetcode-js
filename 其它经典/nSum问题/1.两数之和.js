/**
 * 思路：
 * 普通双层for一一比较
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const ele1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const ele2 = nums[j];
      if (ele1 + ele2 === target) {
        return [i, j]
      }
    }
  }
};

/**
 * 思路
 * 通用nsum，注意这里为了和三数之和解法通用，改了题目返回元素的值而不是索引
 * 先排序
 * 再从头尾巴
 */
var twoSum = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  nums.sort((a, b) => (a - b)) // 升序
  while (left <= right) {
    /**
     * 左右两个指针向中间移动
     */
    const sum = nums[left] + nums[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else if (sum === target) {
      return [nums[left], nums[right]]
    }
  }
};

/**
 * 思路 空间换时间，只需要一次for
 * for遍历过程中存下数字和数字对应的i
 * 这样找target - num时直接取，省去用for查找，等于用空间换时间
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const ele1 = nums[i];
    if (map.has(target - ele1)) {
      return [i, map.get(target - ele1)]
    } else {
      map.set(ele1, i)
    }
  }
};
