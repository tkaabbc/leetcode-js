/**
 * 这题的思路和n皇后有点像
 * 关键是学人家怎么定义rows、columns、grids、pending含义
 * 之后就是对pending进行回溯遍历了
 * 
 * rows 一个二维数组长度为 9，记录每一行中某个数字的出现状态，比如 rows[0][1] 代表第 0 行中是否出现过数字 1。
 * columns 一个二维数组长度为 9，记录每一列中某个数字的出现状态，比如 columns[0][1] 代表第 0 列中是否出现过数字 1。
 * grids 一个二维数组长度为 3，记录每个九宫格中某个数字的出现状态，比如 grids[0][1] 代表第 0 个九宫格中是否出现过数字 1。
 * pending [[x,y][z,w]] 表示x行y列和z行w列待填充
 * 
 * github对grids的图例清晰，这题忘记了看github的讲解就能懂了。
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 let solveSudoku = function (board) {
  let rows = initTwoDimensionalArray(9)
  let columns = initTwoDimensionalArray(9)
  let grids = initTwoDimensionalArray(3)

  // 待处理下标队列 第一次扫描的时候记录下来
  let pending = []

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let cell = board[y][x]
      if (cell === ".") {
        // 待填充的数独格子 记录在队列中
        pending.push([x, y])
        continue
      }
      // 记录下当前下标
      recordCell(x, y, cell)
    }
  }

  // helper来做回溯逻辑
  let helper = (startPendingIndex) => {
    if (startPendingIndex === pending.length) {
      return true // 有别于n皇后的这里 n皇后是将结果存到新变量中
    }

    let [x, y] = pending[startPendingIndex]

    for (let i = 1; i <= 9; i++) {
      let cur = i.toString()
      if (isValid(x, y, cur)) {
        board[y][x] = cur
        recordCell(x, y, cur)
        if (helper(startPendingIndex + 1)) { // 注意这里因为题目要求直接对borad修改，不返回anything，所以要区别正确情况与错误情况，正确则不对board进行重置（正确还重置的话结果就不对了）有别于n皇后对所有情况进行重置（n皇后是有多种解的情况，所以正确情况push到数组中之后还要回溯回去重置，这里解数独只有一种情况）；
          return true
        } else {
          board[y][x] = "."
          restoreCell(x, y, cur)
        }
      }
    }
  }

  helper(0)

  // 记录xy存在cell
  function recordCell(x, y, cell) {
    rows[y][cell] = true
    columns[x][cell] = true
    let [gridX, gridY] = findGridIndex(x, y)
    if (!grids[gridY][gridX]) {
      grids[gridY][gridX] = new Map()
    }
    grids[gridY][gridX].set(cell, true)
  }

  // 清空xy
  function restoreCell(x, y, cell) {
    rows[y][cell] = false
    columns[x][cell] = false
    let [gridX, gridY] = findGridIndex(x, y)
    grids[gridY][gridX].set(cell, false)
  }

  // 判断xy填入cell是否满足要求
  function isValid(x, y, cell) {
    let isYConflict = rows[y][cell]
    let isXConflict = columns[x][cell]
    let [gridX, gridY] = findGridIndex(x, y)
    let grid = grids[gridY][gridX]
    let isGridConflict = grid && grid.get(cell)
    return !isYConflict && !isXConflict && !isGridConflict
  }
}

// 生成二维数组
function initTwoDimensionalArray(length) {
  let res = []
  for (let i = 0; i < length; i++) {
    res.push([])
  }
  return res
}

// 确定坐标xy处于哪个grid中
function findGridIndex(x, y) {
  return [Math.floor(x / 3), Math.floor(y / 3)]
}