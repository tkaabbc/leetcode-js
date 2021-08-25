/**
 * 参考https://segmentfault.com/a/1190000012829866
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} MAX_BAG_CAPACITY 背包最大承重
 */
function knapsack(weights, values, W){
  var n = weights.length;
  var memo = new Array(W+1).fill(0)
  for(var i = 0; i < n; i++) {
      /** 
       * 解释：dp表从二维数组优化成一纬数组的思路 用一句话就是：
       *  【用第i行的计算结果覆盖i-1行的结果】
       * （因为题目要求解的最大装载量其实就是dp表的最后一行最后一个，所以前面一行的结果用完后用新的结果覆盖掉就行了）
      */
      /**
       * 解释：这里为什么一定只能j--？
       * 这里j只能从后往前，原因是因为在计算第i个物品最大重量f[j]时
       * 因为我们这里优化成一维数组之后，填表的过程是这样的：i-1算完后，算i时，i直接覆盖掉i-1的结果
       * 而我们会用到i-1中算出的f[j-weights[i]]，又因为j-weights[i]小于j，肯定要等i-1中算出的f[j-weights[i]]使用完了才能覆盖
       * 所以j从后往前可以避免把i-1中算的结果给覆盖掉
       * 所以这里只能j--
       * 
       */
      for(var j = W; j >= weights[i]; j--){  
        console.log('当前最大承重j：', j, '当前物品编号i：', i) //调试
        memo[j] = Math.max(memo[j], memo[j-weights[i]] +values[i]);
        console.log(memo) //调试
      }
      console.log(`==前${i+1}个物品，背包容量为f数组下标时，可装的物品的价值==`) //调试
      console.log(memo) //调试
      console.log('===================================================') //调试
  }
  return memo[W];
}

const weight = [2,2,4,6,3]
const value = [1,4,5,4,3]
const w = 6
/**
 * 纵坐标表示考察第几个物品
 * 表格里的数字表示第i个物品，横坐标重量下能装的最大价值
 * 横坐标表示重量0  1  2  3  4  5  6
  重量 价值  [ 
  w=2  v=1  [ 0, 0, 0, 1, 1, 1, 1 ],
  w=2  v=4  [ 0, 0, 4, 4, 4, 5, 5 ],
  w=4  v=5  [ 0, 0, 4, 4, 5, 5, 9 ],
  w=6  v=4  [ 0, 0, 4, 4, 5, 5, 9 ],
  w=3  v=3  [ 0, 0, 4, 4, 5, 7, 9 ]
          ]
 */
console.log(knapsack(weight, value, w));
