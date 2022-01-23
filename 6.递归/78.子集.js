/**
 * 
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**todo：自己实现子集（已经归纳组合模版）
 * 思路：有0～nums.length长度的情况，每种情况都算出来就行
 * 
 * 子集 === 子（组合）
 * 子集的目标长度为任意
 * 子（组合）的目标长度是固定）
 * 只不过是在helper递归时把每种长度的prev都存起来（并且去重）
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = []
  let n = nums.length
  if (n === 0) {
    return res
  }

  let helper = (start, prev, targetLength) => {
    if (start > n) {
      return
    }
    if (prev.length === targetLength) {
      res.push(prev)
      return
    }

    for (let i = start; i < n; i++) {
      let cur = nums[i]
      console.log('start', start, 'i', i, 'targetLength', targetLength, 'prev.concat(cur)', prev.concat(cur));
      helper(i + 1, prev.concat(cur), targetLength)
    }
  }

  for (let j = 1; j <= nums.length; j++) {
    helper(0, [], j)
  }

  return [[], ...res]
};
var subsets = function (nums) {
  const res = [[]];
  const divide = (arr, index) => {
    if (index >= nums.length) {
      return;
    }

    const t = [...arr, nums[index]];
    res.push(t);

    // 放
    divide(t, index + 1);

    // 不放
    divide(arr, index + 1);
  };

  divide([], 0);

  return res;
};


console.log(subsets([1,2,3]))
/**
 * 
start 0 i 0 targetLength 1 prev.concat(cur) [ 1 ]
start 0 i 1 targetLength 1 prev.concat(cur) [ 2 ]
start 0 i 2 targetLength 1 prev.concat(cur) [ 3 ]
start 0 i 0 targetLength 2 prev.concat(cur) [ 1 ]
start 1 i 1 targetLength 2 prev.concat(cur) [ 1, 2 ]
start 1 i 2 targetLength 2 prev.concat(cur) [ 1, 3 ]
start 0 i 1 targetLength 2 prev.concat(cur) [ 2 ]
start 2 i 2 targetLength 2 prev.concat(cur) [ 2, 3 ]
start 0 i 2 targetLength 2 prev.concat(cur) [ 3 ]
start 0 i 0 targetLength 3 prev.concat(cur) [ 1 ]
start 1 i 1 targetLength 3 prev.concat(cur) [ 1, 2 ]
start 2 i 2 targetLength 3 prev.concat(cur) [ 1, 2, 3 ]
start 1 i 2 targetLength 3 prev.concat(cur) [ 1, 3 ]
start 0 i 1 targetLength 3 prev.concat(cur) [ 2 ]
start 2 i 2 targetLength 3 prev.concat(cur) [ 2, 3 ]
start 0 i 2 targetLength 3 prev.concat(cur) [ 3 ]
 */