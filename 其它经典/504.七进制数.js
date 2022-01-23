/**
 * 
给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

 

示例 1:

输入: num = 100
输出: "202"
示例 2:

输入: num = -7
输出: "-10"
 

提示：

-107 <= num <= 107


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/base-7
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var convertToBase7 = function(num) {
  let ret = '', flag = false
  if (num < 0) {
    num = - num
    flag = true
  } else if (num === 0) {
    return '0'
  }

  // 进制转换公式参考https://www.cnblogs.com/gaizai/p/4233780.html#_labelConvert20

  // 十进制转二进制方法，转7进制同理，转其它进制也是这样
  // 除2取余法，即每次将整数部分除以2，余数为该位权上的数，而商继续除以2，余数又为上一个位权上的数，这个步骤一直持续下去，直到商为0为止
  // 重复下面两行就能实现十进制转七进制
  while (num > 0) {
    ret = (num % 7).toString() + ret // 取余，每一次的余数都拼到结果中
    num = (num - num % 7) / 7 // 算出商，下一个while中用商继续取余
  }
  return flag ? '-' + ret : ret
};
