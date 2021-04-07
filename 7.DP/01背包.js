/**
 * 
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} n 物品数量
 * @param {number} w 背包最大承重
 */
function knapsack(weight, value, n, w) {
  let states = genTable(n, w+1)
  states[0][0] = 0
  states[0][weight[0]] = value[0]
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) { // 不放第i个
      if (states[i-1][j] >= 0) {
        states[i][j] = states[i-1][j]
      }
    }

    for (let j = 0; j <= w - weight[i]; j++) { // 放第i个 这块不懂 打印看看
      if (states[i-1][j] >= 0) { //只对0或之前已经放过的重量基础之上进一步考察；因为不可能凭空突然达到某个重量。
        console.log(states[i-1][j]);
        console.log(states); // 打印表格
        // 这里的思路是这样的
        // 画出表格
        // 考虑第i个物品，也就是表格第i行，
        // 如果放入该物品之后，与另外重量相同的方案对比，若价值更高，那就放入（states[i-1][j] + value[i] > states[i][j + weight[i]]）
        // 并且较低的方案就被舍弃
        let v1 = states[i-1][j] + value[i] // 这里用i-1而不用i能避免重复计算，因为states[i]在下面v2=v1之后会变化
        let v2 = states[i][j + weight[i]]
        if (v1 > v2) {
          v2 = v1
        }
      }
    }
  }

  let maxValue = -1
  for (let j = 0; j <= w; j++) {
    if (states[n-1][j] > maxValue) {
      maxValue = states[n-1][j]
    }
  }
  return maxValue
}

function genTable(y, x) {
  var arr = [];
  var n=1;
  for(var i = 0;i < y; i++){
    arr[i] = [];
    for(var j = 0;j < x; j++){
      arr[i][j] = -1;
    }
  }
  return arr
}

const weight = [2,2,4,6,3]
const value = [1,4,5,4,3]
const n = weight.length
const w = 6
/**
 * 纵坐标表示考察第几个物品
 * 表格里的数字表示第i个物品，横坐标重量下能装的最大价值
 * 横坐标表示重量0  1  2  3  4  5  6
  重量 价值  [ 
  w=2  v=1  [ 0, -1, 1, -1, -1, -1, -1 ],
  w=2  v=4  [ 0, -1, 4, -1, 5, -1, -1 ],
  w=4  v=5  [ 0, -1, 4, -1, 5, -1, 9 ],
  w=6  v=4  [ 0, -1, 4, -1, 5, -1, 9 ],
  w=3  v=3  [ 0, -1, 4, 3, 5, -1, 9 ]
          ]
 */
console.log(knapsack(weight, value, n, w));
