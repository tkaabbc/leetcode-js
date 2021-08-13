/**
 * 
 * quickSort(arr, left, right)思路:
 * 1. 调用partition（称为分区操作）把arr排成 小 + pivot + 大 的形式，此时pivot在arr中的位置就是最终排好序的正确位置
 * 2. 递归对 小 和 大 的部分再调用partition，每次调用都产生一个正确位置的pivot；最终所有值都被放到正确位置
 * 
 * partition(arr, left, right)思路:
 * 1. 随机取一个基准值（arr[pivot]）放到数组开头位置（或者直接取arr[left]为基准值；
 * 2. 定义两个指针 
 *    1).index: index从1开始，用来存放比arr[piovt]小的值，存进去一个index就自增1
 *    2).i: 用来遍历arr，因为0处为pivot，所以从1开始
 * 3. 将 index和i 在for遍历中进行比较，如果arr[i] < arr[pivot]，就交换i和index的值: swap(arr, i, index)
 * 4. 遍历结束后，把pivot从 0 换到 index - 1 处: swap(arr, pivot, index - 1)；
 *    注): 这一步交换就把5放到了最终的位置
 *
 * [ 5, 7, 2, 9, 1, 8, 3 ] // 初始arr；‘^’为基准值；此时还是无序的
 *   ^
 * [ 5, 2, 1, 3, 7, 8, 9 ] // 完成3后
 *   ^  -------- --------
 *       比5小的⬆️  比5大的⬆️
 * [ 3, 2, 1, 5, 7, 8, 9 ] // 完成4最终态
 *  --------  ^  --------
 *  比5小的⬆️     比5大的⬆️
 * 
 * 总结：以上4步就是partition的思路，这种方法实现quickSort的特点是不创建额外数组，通过swap在同一个数组中交换元素来实现排序
 * 
 * 
 * 
 * partition运算过程打印
i: 1 index: 1
 
----------------------------
 
i: 2 index: 1
before swap: [ 5, 7, 2, 9, 1, 8, 3 ]
after  swap: [ 5, 2, 7, 9, 1, 8, 3 ]
 
----------------------------
 
i: 3 index: 2
 
----------------------------
 
i: 4 index: 2
before swap: [ 5, 2, 7, 9, 1, 8, 3 ]
after  swap: [ 5, 2, 1, 9, 7, 8, 3 ]
 
----------------------------
 
i: 5 index: 3
 
----------------------------
 
i: 6 index: 3
before swap: [ 5, 2, 1, 9, 7, 8, 3 ]
after  swap: [ 5, 2, 1, 3, 7, 8, 9 ]
 
----------------------------
 
一次partition结束 [ 3, 2, 1, 5, 7, 8, 9 ]
                  --------  ^  --------
                  比5小的⬆️      比5大的⬆️
最终pivot所在位置 3
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right

  if (left < right) { // 到left === right就return
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1) // partitionIndex的值保持不动，对partitionIndex左右两边数组重复quickSort
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {     // 分区操作
  console.log('left :', left);
  console.log('right:', right);
  var pivot = left,                      // 设定基准值（pivot）
    index = pivot + 1
  for (var i = index; i <= right; i++) {
    // console.log('i:', i, 'index:', index)
    if (arr[i] < arr[pivot]) {
      // console.log('before swap:', arr)
      swap(arr, i, index)
      // console.log('after  swap:', arr)
      index++
    }
    // console.log(' ')
    // console.log('----------------------------')
    // console.log(' ')

  }
  swap(arr, pivot, index - 1)
  console.log('一次partition结束', arr)
  console.log('最终pivot所在位置', index - 1)
  console.log('----------------------------')
  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [5, 7, 2, 9, 1, 8, 3]
// partition(arr, 0, 6)
quickSort(arr, 0, 6)
