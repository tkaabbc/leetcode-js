const swap = require("../工具/交换")
/**
 * 冒泡排序
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    // 已经处理过的就不用再访问了 所以 - i
    // 并且由于每次遍历会访问 j 和 j+1 所以减去1就能访问完所有；若不减1会超出
    // 所以这里的终止条件可以是arr.length - i - 1
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    // 如果这次循环都没有数字被交换 说明已经是排序好的数组
    if (!flag) return arr
  }
  return arr
}
