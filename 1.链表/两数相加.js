const util = require('util')

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var l1 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1,
      next: {
        val: 1
      }
    }
  }
}
var l2 = {
  val: 1,
  next: {
    val: 5,
    next: {
      val: 3
    }
  }
}
// 输入l1l2，输出2->5->4->1


function addTwoNumbersNormal(l1, l2) {
  let root = new ListNode()
  let cur = root
  let carry = 0 // 表示是否要进一
  while(l1 || l2 || carry) {
    // 注意：如果有进一，还要再while一次；所以加上|| carry
    // 输入：
    // [9,9,9,9,9,9,9]
    // [9,9,9,9]
    // 我没加的时候输出：[8,9,9,9,0,0,0]
    // 预期：[8,9,9,9,0,0,0,1]

    let sum = carry
    carry = 0

    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    cur.next = new ListNode(sum%10)
    cur = cur.next

    if (sum >= 10) {
      carry = 1
    }
  }
  return root.next
}
// 感悟：两数相加还是属于常规题吧，只要理解了逆序是什么意思，就知道题目要让你干啥了；
// 看评论有说题目故意出‘逆序相加’才方便进一，可能吧，可能这就是为了让链表好循环而故意出成逆序的题吧


// 下面是我想用整数相加的偷懒解法，发现数字超出长度会精度被省略，只能用上面正常的解法。
var addTwoNumbers = function(l1, l2) {
let curL1 = l1
let curL2 = l2
let str1 = ''
let str2 = ''
let res = ''
let root = new ListNode()
let cur = root

while(curL1) {
    str1 += curL1.val.toString()
    curL1 = curL1.next
}
console.log('str1',str1)
while(curL2) {
    str2 += curL2.val.toString()
    curL2 = curL2.next
}
console.log('str2',str2)
res = (new Number(str1.split('').reverse().join('')) + new Number(str2.split('').reverse().join(''))).toString()
let len = res.length
while(len > 0) {
    cur.next = new ListNode(res[len - 1])
    cur = cur.next
console.log('cur',cur)

    len--
}
console.log('root',root)
return root.next
};

let addTwoNumbers2 = function (l1, l2) {
  let i = 0
  let root = new ListNode()
  let cur = root
  let plus = false

  let traverse = (node1, node2) => {
    let isDouble = !!node2
    while (isDouble ? node1 && node2 : node1) {
      cur.next = new ListNode()
      cur = cur.next

      let sum = node1.val + (plus ? 1 : 0)
      if (isDouble) {
        sum += node2.val
      }

      if (sum >= 10) {
        sum %= 10
        plus = true
      } else {
        plus = false
      }
      cur.val = sum

      node1 = node1.next
      if (isDouble) {
        node2 = node2.next
      }
    }

    if (node1) {
      traverse(node1)
    }
    if (node2) {
      traverse(node2)
    }
  }

  traverse(l1, l2)

  if (plus) {
    cur.next = new ListNode(1)
  }

  return root.next
}

// 我这种用数字的相机的办法，在数字位数小的时候可以，如果如下位数太多就不行，
// 因为new Number('1000...01')会返回这样的值：1e+24，而这种指数表示会丢失最后其它数字。
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]

// console.log(util.inspect(addTwoNumbers(l1, l2), {showHidden: false, depth: null}))
// console.log(util.inspect(addTwoNumbers2(l1, l2), {showHidden: false, depth: null}))
console.log(util.inspect(addTwoNumbersNormal(l1, l2), {showHidden: false, depth: null}))