/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {
  
  const res = []
  let visited = []
  let allStepsLen = 0
  const endFlag = 2
  let beginLocation = [0,0]
  const maxY = grid.length - 1
  const maxX = grid[0].length - 1

  for (let i = 0; i <= maxY; i++) {
    visited[i] = []
    for (let j = 0; j <= maxX; j++) {
      console.log('grid[i][j]',grid[i][j]);
      allStepsLen += grid[i][j] === 0 ? 1 : 0
      if (grid[i][j] === 1) {
        beginLocation=[i,j]
      }
    }
  }
  console.log('visited',visited);
  
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
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (const [diffY, diffX] of dirs) {
      var nextStepY = prevStepY+diffY
      var nextStepX = prevStepX+diffX
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
  }
  let [beginY, beginx] = beginLocation
  visited[beginY][beginx]
  helper([beginLocation])
  console.log('allStepsLen', allStepsLen);

  return res.length
};

function isValid(nextY, nextX, nextVal, visited) {
  console.log('nextY', nextY);
  console.log('nextX', nextX);
  console.log('visited', visited);
  return nextVal !== -1 && nextVal !== 1 && !visited[nextY][nextX]
}
function isValidRange(nextY, nextX, maxY, maxX) {
  return nextY >=0 && nextX >=0 && nextY <= maxY && nextX <= maxX
}

const ipt = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
const answer = uniquePathsIII(ipt)
console.log(answer);

