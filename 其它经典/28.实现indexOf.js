/**
 * 思路：
 * 用字符串needle去跟haystack的所有长度为m的子串均匹配一次
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  const n = haystack.length
  const m = needle.length
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
          flag = false;
          break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};