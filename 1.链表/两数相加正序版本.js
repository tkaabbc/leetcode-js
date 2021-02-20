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

// 题目2: 两数相加顺序版
// 这是两数相加顺位置的解法；思路：方法一：把链表的数字推到数组中来加；方法二：翻转链表，然后变成逆序相加
// ps:这是别人的分析，说用什么栈的先进后出来处理逆序，我可没想那么多，数组可比栈灵活多了，放进去以后还不是我想怎么搞就怎么搞🙄️（逃～
// “先分别将两个链表的值分别压入栈，然后利用栈后进先出的特性进行逆序相加，同时构建一个链表作为结果返回。”
var addTwoNumbers = function(l1, l2) {
  let lr1 = []
  let lr2 = []
  let res = []
  let root = new ListNode()
  let cur = root
  while(l1 || l2) {
      if(l1) {
          lr1.push(l1.val)
          l1 = l1.next
      }
      if(l2) {
          lr2.push(l2.val)
          l2 = l2.next
      }
      console.log(1)
  }

  let carry = 0
  while(lr1.length || lr2.length || carry) {
      let sum = carry
      carry = 0
      let leng1 = lr1.length
      let leng2 = lr2.length
      if(leng1) {
          sum += lr1.pop()
      }
      if(leng2) {
          sum += lr2.pop()
      }
      res.push(sum%10)

      if(sum > 9) {
          carry = 1
      }
      console.log(2)

  }

  while(res.length) {
      cur.next = new ListNode()
      cur.next.val = res.pop()
      cur = cur.next
      console.log(3)

  }

  return root.next
};
// 复杂度分析
// 时间复杂度：O(max(m, n))O(max(m,n))，其中 mm 与 nn 分别为两个链表的长度。我们需要遍历每个链表。
// 空间复杂度：O(m + n)O(m+n)，其中 mm 与 nn 分别为两个链表的长度。这是我们把链表内容放入栈中所用的空间。

console.log(util.inspect(addTwoNumbers(l1, l2), {showHidden: false, depth: null}))