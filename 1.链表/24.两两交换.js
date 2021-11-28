/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
 

进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const util = require('util')

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
}

// todo: 这题三个指针的情况有点绕，下次先拿笔列一下实际情况验证下我的思路
// 然后再看别人的分析https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/dong-hua-yan-shi-24-liang-liang-jiao-huan-lian-bia/
// 下面的解法是错误的，待订正

// 订正完毕，其实自己的解法是对的，只是三个指针，又要移动，靠脑袋易出错，要画草稿
// 感悟：1只要自己思路是通的代码就能走得通。（复杂情况在本子上打草稿就好了）
// 2只要程序主体是对的，边界情况最后调试的时候再考虑，问题不大，代码不是从上往下写的，有主次的
// 原来我这叫做迭代法，可能是while一个个迭代过去把
/**
 * 思路
 * 要交换当前节点，肯定要知道前一个节点prev
 * 所以定义三个指针prev, origin1, origin2做交换
 * 交换完两个就移动到下两个，以此类推就行
 * @param {*} head 
 * @returns 
 */
var swapPairs = function(head) {
  if (!head.next) {
    return head
  }

  let root = new ListNode()
  root.next = head
  let prev = root
  let origin1 = head
  let origin2 = head.next
  while(origin1 && origin2){
      origin1.next = origin2.next
      prev.next = origin2
      origin2.next = origin1

      prev = origin1
      origin1 = origin1.next
      origin2 = origin1 && origin1.next
  }
  return root.next
};
console.log(util.inspect(swapPairs(l1), {showHidden: false, depth: null}))

// 利用栈来存取
// 递归法