/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * 思路
 * 用取余法做进制转换
 * 因为本题是从1开始所以要n--
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  let n = columnNumber
  while(n){
    // 本题需要我们从 1 开始，因此在执行「进制转换」操作前，我们需要先对 columnNumber 执行减一操作，从而实现整体偏移
    n--
    result = str.charAt(n % 26) + result
    n = (n - n % 26) / 26
  }
  return result
};
// @lc code=end
