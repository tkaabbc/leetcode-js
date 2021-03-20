let solveNQueens = function (n) {
  let res = []

  // 已摆放皇后的的列下标
  let columns = []
  // 这里对角线配合github的图一起看就理解了
  // 已摆放皇后的对角线1下标 左下 -> 右上
  // 计算某个坐标是否在这个对角线的方式是「行下标 + 列下标」是否相等
  let dia1 = []
  // 已摆放皇后的对角线2下标 左上 -> 右下
  // 计算某个坐标是否在这个对角线的方式是「行下标 - 列下标」是否相等
  let dia2 = []

  // 尝试在一个n皇后问题中 摆放第index行内的皇后位置
  let putQueen = (rowIndex, row) => {
    // 摆完n个，退出
    if (rowIndex === n) {
      res.push(generateBoard(row))
      return
    }
    // Q：这里的起点一定是0行0列吧？只求解了一种情况吧？其它情况呢？
    // 不是的，for*递归，有考虑到所有情况
    // 先
    // 尝试摆第index行的皇后 尝试[0, n-1]列
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // 在列上不冲突
      let columnNotConflict = !columns[columnIndex]
      // 在对角线1上不冲突
      let dia1NotConflict = !dia1[rowIndex + columnIndex]
      // 在对角线2上不冲突
      let dia2NotConflict = !dia2[rowIndex - columnIndex]

      if (columnNotConflict && dia1NotConflict && dia2NotConflict) {
        columns[columnIndex] = true
        dia1[rowIndex + columnIndex] = true
        dia2[rowIndex - columnIndex] = true
        console.log('rowIndex', rowIndex);
        console.log('columnIndex', columnIndex);
        putQueen(rowIndex + 1, row.concat(columnIndex)) 

        // console.log('rowIndex', rowIndex);
        // console.log('columnIndex', columnIndex);
        // Q：这里为什么要false，是类似剪枝操作节省空间吗？
        // 这是程序逻辑的一部分，并不是为了节省空间
        columns[columnIndex] = false
        dia1[rowIndex + columnIndex] = false
        dia2[rowIndex - columnIndex] = false
      }
    }
  }

  putQueen(0, [])

  return res
}

function generateBoard(row) {
  let n = row.length
  let res = []
  for (let y = 0; y < n; y++) {
    let cur = ""
    for (let x = 0; x < n; x++) {
      if (x === row[y]) {
        cur += "Q"
      } else {
        cur += "."
      }
    }
    res.push(cur)
  }
  return res
}

solveNQueens(4)

// Q：这里的回溯体现在哪里呢。。怎么没看出来～～～～

// 这里为什么concat？而不是push？
// putQueen(rowIndex + 1, row.concat(columnIndex)) 

// 猜测是为了浅拷贝。

// solveNQueens(4)的访问顺序是这样的
// rowIndex 0    ！00
// columnIndex 0
// rowIndex 1
// columnIndex 2
// rowIndex 1
// columnIndex 3
// rowIndex 2
// columnIndex 1
// rowIndex 0     ！01
// columnIndex 1
// rowIndex 1
// columnIndex 3
// rowIndex 2
// columnIndex 0
// rowIndex 3
// columnIndex 2
// rowIndex 0     ！02
// columnIndex 2
// rowIndex 1
// columnIndex 0
// rowIndex 2
// columnIndex 3
// rowIndex 3
// columnIndex 1
// rowIndex 0     ！03
// columnIndex 3
// rowIndex 1
// columnIndex 0
// rowIndex 2
// columnIndex 2
// rowIndex 1
// columnIndex 1