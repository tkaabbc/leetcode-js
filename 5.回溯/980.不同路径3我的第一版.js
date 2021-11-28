/**
 * 难度 困难
 * 在二维网格 grid 上，有 4 种类型的方格：

1 表示起始方格。且只有一个起始方格。
2 表示结束方格，且只有一个结束方格。
0 表示我们可以走过的空方格。
-1 表示我们无法跨越的障碍。
返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。

 

示例 1：

输入：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
输出：2
解释：我们有以下两条路径：
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
示例 2：

输入：[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
输出：4
解释：我们有以下四条路径： 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
示例 3：

输入：[[0,1],[2,0]]
输出：0
解释：
没有一条路能完全穿过每一个空的方格一次。
请注意，起始和结束方格可以位于网格中的任意位置。
 

提示：

1 <= grid.length * grid[0].length <= 20

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 思路：
 * 1.常规套路，每一步除了原路都有3个方向可以走；回溯找出所有能到终点的路径即可
 * 2.注意多个for能并为一个；技巧：4个方向可以抽象为一个dirs数组
 * 前期草稿纸上确定以下几点：
 * 1.递归终止条件：
 * 2.满足什么条件才进行下一步helper：
 * 3.每一次面临的情况有哪些（4个方向走）
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {
  
  const res = []
  const visited = genVisited(grid.length, grid[0].length)
  console.log('visited', visited);
  const allStepsLen = findAllStepLen(grid)
  const endFlag = 2
  const beginLocation = findBeginAndEnd(1, grid)
  const maxY = grid.length - 1
  const maxX = grid[0].length - 1
  
  function helper(prevPaths) {
    console.log(prevPaths);
    const prevLen = prevPaths.length
    const prevStep = prevPaths[prevLen - 1]
    const prevStepY = prevStep[0]
    const prevStepX = prevStep[1]
    console.log('prevStep',prevStep);
    console.log('prevStepY',prevStepY);
    console.log('prevStepX',prevStepX);
    console.log('grid',grid[prevStepY][prevStepX]);
    
    const prevStepVal = grid[prevStepY][prevStepX]
    
    if (prevLen - 2 === allStepsLen && prevStepVal === endFlag) {
      res.push(prevPaths)
      return
    }

    // 四个方向递归
    var nextStepY = prevStepY+1
    var nextStepX = prevStepX
    if (isValidRange(nextStepY, nextStepX, maxY, maxX)) {
      var nextStepVal = grid[nextStepY][nextStepX]
      console.log('nextStepVal', nextStepVal);
      if (isValid(nextStepY, nextStepX, nextStepVal, visited)) {
        visited[nextStepY][nextStepX] = true
        helper(prevPaths.concat([[nextStepY, nextStepX]]))
        visited[nextStepY][nextStepX] = false
      }
    }

    var nextStepY = prevStepY-1
    var nextStepX = prevStepX
    if (isValidRange(nextStepY, nextStepX, maxY, maxX)) {
      var nextStepVal = grid[nextStepY][nextStepX]
      console.log('nextStepVal', nextStepVal);
      if (isValid(nextStepY, nextStepX, nextStepVal, visited)) {
        visited[nextStepY][nextStepX] = true
        helper(prevPaths.concat([[nextStepY, nextStepX]]))
        visited[nextStepY][nextStepX] = false
      }
    }

    var nextStepY = prevStepY
    var nextStepX = prevStepX+1
    if (isValidRange(nextStepY, nextStepX, maxY, maxX)) {
      var nextStepVal = grid[nextStepY][nextStepX]
      console.log('nextStepVal', nextStepVal);
      if (isValid(nextStepY, nextStepX, nextStepVal, visited)) {
        visited[nextStepY][nextStepX] = true
        helper(prevPaths.concat([[nextStepY, nextStepX]]))
        visited[nextStepY][nextStepX] = false
      }
    }

    var nextStepY = prevStepY
    var nextStepX = prevStepX-1
    if (isValidRange(nextStepY, nextStepX, maxY, maxX)) {
      var nextStepVal = grid[nextStepY][nextStepX]
      console.log('nextStepVal', nextStepVal);
      if (isValid(nextStepY, nextStepX, nextStepVal, visited)) {
        visited[nextStepY][nextStepX] = true
        helper(prevPaths.concat([[nextStepY, nextStepX]]))
        visited[nextStepY][nextStepX] = false
      }
    }
  }
  let [beginY, beginx] = beginLocation
  visited[beginY][beginx]
  helper([beginLocation])
  console.log('allStepsLen', allStepsLen);

  return res.length
};

function findBeginAndEnd(num, grid) {
  var res = [0, 0]
  grid.forEach((rowY, rowI) => {
    rowY.forEach((columX, columI) => {
      if (columX === num) {
        res = [rowI, columI]
      }
    })
  });
  return res
}

function genVisited(y, x) {
  var arr = [];
  var n=1;
  for(var i = 0;i < y; i++){
    arr[i] = []; //每行有10列
    for(var j = 0;j < x; j++){
      arr[i][j] = false;
    }
  }
  return arr
}

function isValid(nextY, nextX, nextVal, visited) {
  console.log('nextY', nextY);
  console.log('nextX', nextX);
  console.log('visited', visited);
  return nextVal !== -1 && nextVal !== 1 && !visited[nextY][nextX]
}
function isValidRange(nextY, nextX, maxY, maxX) {
  return nextY >=0 && nextX >=0 && nextY <= maxY && nextX <= maxX
}
function findAllStepLen(grid) {
  let answer = 0
  for (const row of grid) {
    console.log('rowrowrow', row);
    for (const colum of row) {
    console.log('colum', colum);

      answer += colum === 0 ? 1 : 0
    console.log('answer', answer);
      
    }
  }
  return answer
}

const ipt = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
const answer = uniquePathsIII(ipt)
console.log(answer);

/**
 * 在二维网格 grid 上，有 4 种类型的方格：

1 表示起始方格。且只有一个起始方格。
2 表示结束方格，且只有一个结束方格。
0 表示我们可以走过的空方格。
-1 表示我们无法跨越的障碍。
返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目，每一个无障碍方格都要通过一次。

示例 1：

输入：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
输出：2
解释：我们有以下两条路径：
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
示例 2：

输入：[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
输出：4
解释：我们有以下四条路径：
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
示例 3：

输入：[[0,1],[2,0]]
输出：0
解释：
没有一条路能完全穿过每一个空的方格一次。
请注意，起始和结束方格可以位于网格中的任意位置。
提示：

1 <= grid.length * grid[0].length <= 20

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */