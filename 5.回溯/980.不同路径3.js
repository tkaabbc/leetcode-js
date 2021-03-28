/**
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

