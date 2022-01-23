/**
 * 
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 思路
 * 滑动窗口的队列实现
 * queue.push增加范围 相当于right++
 * queue.shift()弹出 相当于left++
 * 没有重复就一直入队列
 * 有重复就从窗口左边，也就是最早进队列的弹出
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let queue = [], max = 0;
  for (let item of s) {
    while (queue.includes(item)) queue.shift(); // 一直弹出 直到没有重复字符
    queue.push(item); // 入队列
    max = Math.max(max, queue.length); // 更新一下max
  }
  return max;
}