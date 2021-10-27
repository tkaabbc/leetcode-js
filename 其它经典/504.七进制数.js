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
