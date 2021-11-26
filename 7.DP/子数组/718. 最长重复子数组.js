/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路
 * 暴力：两个数组用双层for一一比较，找到一个相同值作为起点比较后续的值，这里因为是连续的所以较为简单
 * 
 * 滑动窗口法：挺有意思，枚举不同对齐方式，然后计算出相对位置上值相同的数量https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zui-chang-zhong-fu-zi-shu-zu-by-leetcode-solution/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  let maxLen = 0
  function helper(nums1Start, nums2Start, curCommonLen) {
    const shorterRestLen = getShorterRestLen()
    let i = nums1Start
    let j = nums2Start
    while (shorterRestLen) {
      if (nums2[j] === nums1[i]) {
        i++
        j++
        curCommonLen++
        shorterRestLen--
      } else {
        return
      }
    }
    maxLen = Math.max(curCommonLen, maxLen)
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        helper(i, j, 1)
      }
    }    
  }
  return maxLen
};

/**
 * 获取数组剩余较小的长度
 * @param {*} params 
 */
function getShorterRestLen(params) {
  return 1 // todo
}