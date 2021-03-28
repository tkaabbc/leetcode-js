/**
 * 思路：比46题多了去重
 * 去重办法
 * 1：对象中用key记录是否已经有该种排列
 * 2：用Set保留去重
 * 
 * @param {*} nums 
 */
// 方法一：key去重
function permuteUnique(nums) {
  const n = nums.length
  if (n === 1) {
    return nums
  }
  const res = []
  const used = {}
  for (let i = 0; i < nums.length; i++) {
    const use = nums[i]
    const rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
    const restPermutes = permuteUnique(rest)
    console.log('use',use);
    console.log('restPermutes',restPermutes);
    for (const restPermute of restPermutes) {
      const resItem = [use].concat(restPermute)
      const key = genKey(resItem)
      if (!used[key]) {
        res.push(resItem)
        used[key] = true
      }
    }
  }
  return res
}
function genKey(arr) {
  return arr.join('~')
}

// 方法二：set去重
let uniqSymbol = 'X'

var permuteUnique = function (nums) {
  let n = nums.length
  if (n === 1) {
    return [nums]
  }
  let permuteSet = (nums) => {
    let n = nums.length
    if (n === 0) {
      return new Set() // 这里用set因为res返回的是set
    }
    if (n === 1) {
      console.log('nums',nums);
      return new Set(nums) // 这里用set因为res返回的是set
    }

    let res = new Set()
    for (let i = 0; i < n; i++) {
      let use = nums[i]
      if (use === undefined) {
        continue
      }
      let rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
      let restPermuteds = permuteSet(rest)
        console.log('restPermuteds',restPermuteds);
        restPermuteds.forEach((restPermuted) => {
        console.log('restPermuted',restPermuted);
        console.log('strres',`${use}${uniqSymbol}${restPermuted}`);
        res.add(`${use}${uniqSymbol}${restPermuted}`)
      })
    }

    return res
  }

  let permuted = permuteSet(nums)

  return Array.from(permuted).map((val) => val.split(uniqSymbol).map(Number))
}
const ipt = [1,1,2]
console.log(permuteUnique(ipt))

