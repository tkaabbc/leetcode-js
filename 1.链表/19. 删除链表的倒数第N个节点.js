// 方法
// 1遍历一次算出链表长，再遍历一次把第n个删除
// 2快慢指针
// 3用栈 先入栈再出来n+1个 删除prev.next = prev.next.next
// 参考https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/

// 收获：在对链表进行操作时，一种常用的技巧是添加一个哑节点（dummy node），它的 \textit{next}next 指针指向链表的头节点。这样一来，我们就不需要对头节点进行特殊的判断了。

// 快慢指针思路：
// 定义两个指向head链表的指针，双指针（快慢指针）
// 快指针提前移动n个节点
// 慢指针跟快指针一起移动，当快指针移动到末尾节点的时候停止
// 再对慢指针进行移除后一个节点的操作

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let quick = head;
  let slow = new ListNode(null, head);
  let ans = slow; // 注意这里是为了题目要求返回头指针ans.next
  // todo 确认这里是n还是n - 1
  while(n){
      quick = quick.next;
      n--;
  }
  while(quick){
      slow = slow.next;
      quick = quick.next;
  }

  // 删除最后一个则直接为null
  if(n==1)
      slow.next = null;
  else{
      slow.next = slow.next.next
  }
  return ans.next;
};
