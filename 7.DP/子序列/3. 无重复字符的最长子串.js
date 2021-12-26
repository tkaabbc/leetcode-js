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