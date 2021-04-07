/**
 * 我们有一个背包，背包总的承载重量是 Wkg。现在我们有 n 个物品，每个物品的重量不等，并且不可分割。
 * 我们现在期望选择几件物 品，装载到背包中。
 * 在不超过背包所能装载重量的前提下，如何让背包中物品的总重量最大
 * todo: 背包这种解法貌似没有体现出回溯啊？只有递归？有待研究
 * @param {*} i 当前考察到第几个
 * @param {*} cw 当前已经装入的物品重量
 * @param {*} wArray 所有物品重量数组
 * @param {*} n 所有物品个数即wArray.length
 * @param {*} W 最大承重
 */
let maxW = 0
function maxCarry(i, cw, wArray, n, W) {
  if (cw === w || i === n) {
    if (cw > maxW) maxW = cw
  }

  maxCarry(i, cw, wArray, n, W)
  if (cw + wArray[i] <= W) {
    maxCarry(i, cw + wArray[i], wArray, n, W)
  }
}