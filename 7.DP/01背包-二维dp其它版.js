/**
 * 注：这个版本的解法感觉不如另一个二维标准的通用，可以用来参考，多个思路
 * 二维dp的解法主要还是看 01背包-二维dp数组标准版本.js 这个文件的吧～
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} n 物品数量
 * @param {number} w 背包最大承重
 */
function knapsack(weight, value, n, w) {
  let memo = genTable(n, w+1)
  memo[0][0] = 0
  memo[0][weight[0]] = value[0]
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) { // 不放第i个
      if (memo[i-1][j] >= 0) {
        memo[i][j] = memo[i-1][j]
      }
    }

    for (let j = 0; j <= w - weight[i]; j++) { // 放第i个 这块不懂 打印看看
      if (memo[i-1][j] >= 0) { //只对0或之前已经放过的重量基础之上进一步考察；因为不可能凭空突然达到某个重量。
        console.log(memo[i-1][j]);
        console.log(memo); // 打印表格
        // 这里的思路是这样的
        // 画出表格
        // 考虑第i个物品，也就是表格第i行，
        // 如果放入该物品之后，与另外重量相同的方案对比，若价值更高，那就放入（memo[i-1][j] + value[i] > memo[i][j + weight[i]]）
        // 并且较低的方案就被舍弃
        // f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}
        // 👇代码实现就是下面这样
        // memo[i][j + weight[i]] = Math.max(memo[i][j + weight[i]], memo[i-1][j] + value[i])
        /**
         * 前i-1件物品放入容量为v的背包中”，价值为f[i-1][v]；如果放第i件物品，那么问题就转化为“前i-1件物品放入剩下的容量为v-c[i]的背包中”，此时能获得的最大价值就是f[i-1][v-c[i]]再加上通过放入第i件物品获得的价值w[i]。
         */
        let v1 = memo[i-1][j] + value[i] // 放；这里用i-1而不用i能避免重复计算，因为memo[i]在下面v2=v1之后会变化
        let v2 = memo[i][j + weight[i]] // 不放；
        memo[i][j + weight[i]] = Math.max(v1, v2)
      }
    }
  }

  let maxValue = -1
  for (let j = 0; j <= w; j++) {
    if (memo[n-1][j] > maxValue) {
      maxValue = memo[n-1][j]
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
 * 表格里的数字表示：第i个物品，横坐标容量下能装的最大价值
 * 横坐标表示容量0  1  2  3  4  5  6
  重量 价值  [ 
  w=2  v=1  [ 0, -1, 1, -1, -1, -1, -1 ],
  w=2  v=4  [ 0, -1, 4, -1, 5, -1, -1 ],
  w=4  v=5  [ 0, -1, 4, -1, 5, -1, 9 ],
  w=6  v=4  [ 0, -1, 4, -1, 5, -1, 9 ],
  w=3  v=3  [ 0, -1, 4, 3, 5, -1, 9 ]
          ]
 */
console.log(knapsack(weight, value, n, w));

/**
 * 思路
 * 暴力法：
 * 每个都有两个选择，放or不放，递归下去
 * 
 * dp法：
 * 精髓是dp方程
 * states[i][v] = max(state[i - 1][v], state[i - 1, v - Ci] + Wi)
 */