let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "256g"]

// let ak = ["全新", "二手"]

/**
 * 思路：
 * 定义一个helper函数：用来拼接数组的函数；
 * 接收两个参数：chunkIndex 当前拼接的序数, prev之前拼接的结果
 * 
 * 思考：这里的helper模版应该是适用于不走回头路的情况，start和prev是精髓
 * @param {*} params 
 */
function combine(...chunks) {
  const res = []
  function helper(chunkIndex, prev) {
    const chunk = chunks[chunkIndex]
    const isLast = chunkIndex === chunks.length - 1
    for (const val of chunk) { // 把当前所有属性都拼接到prev上；注意这里不要去管prev有多少个，传进来的肯定只有1个，我们这步要做的就是1xn产出n个
      const cur = prev.concat(val)
      if (isLast) {
        res.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  }
  helper(0, [])
  return res
}

console.log(combine(names, colors, storages))