/**
 * 有N件物品和一个容量为V的背包。第i件物品的重量是c[i]，价值是w[i]。求解将哪些物品装入背包可使价值总和最大。 
 */
/**
 * 
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} MAX_BAG_CAPACITY 背包最大承重
 */
function knapsack(weight, value, MAX_BAG_CAPACITY) {
  const NUM = weight.length
  let memo = genTable(NUM, MAX_BAG_CAPACITY+1)
  for (let i = 0; i < NUM; i++) {
    memo[i][0] = 0;
  }
  for (let j = 0; j <= MAX_BAG_CAPACITY; j++) {
    memo[0][j] = j >= weight[0] ? value[0] : 0;
  }

  for (let i = 1; i < NUM; i++) {
    for (let j = 0; j <= MAX_BAG_CAPACITY; j++) {
      if (j - weight[i] < 0) {
        memo[i][j] = memo[i - 1][j]
      } else {
        // 最大价值为：Math.max(不放第i件的最大价值 + 放第i件的最大价值)
        memo[i][j] = Math.max(memo[i - 1][j], memo[i - 1][j - weight[i]] + value[i])
      }
    }
  }
  console.log(memo);

  return memo[NUM-1][MAX_BAG_CAPACITY]
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
const w = 6
/**
 * 纵坐标表示考察第几个物品
 * 表格里的数字表示第i个物品，横坐标重量下能装的最大价值
 * 横坐标表示重量0  1  2  3  4  5  6
  重量 价值  [ 
  w=2  v=1  [ 0, 0, 1, 1, 1, 1, 1 ],
  w=2  v=4  [ 0, 0, 4, 4, 5, 5, 5 ],
  w=4  v=5  [ 0, 0, 4, 4, 5, 5, 9 ],
  w=6  v=4  [ 0, 0, 4, 4, 5, 5, 9 ],
  w=3  v=3  [ 0, 0, 4, 4, 5, 7, 9 ]
          ]
 */
console.log(knapsack(weight, value, w));
