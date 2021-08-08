// 方法
// 1遍历一次算出链表长，再遍历一次把第n个删除
// 2快慢指针
// 参考https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/

// 收获：在对链表进行操作时，一种常用的技巧是添加一个哑节点（dummy node），它的 \textit{next}next 指针指向链表的头节点。这样一来，我们就不需要对头节点进行特殊的判断了。

// 快慢指针思路：
// 定义两个指向head链表的指针，双指针（快慢指针）
// 快指针提前移动n个节点
// 慢指针跟快指针一起移动，当快指针移动到末尾节点的时候停止
// 再对慢指针进行移除后一个节点的操作

var removeNthFromEnd = function(head, n) {
  let quick = head;
  let low = new ListNode(null);
  low.next = head;
  let ans = low;
  // todo 确认这里是n还是n - 1
  while(n){
      quick = quick.next;
      n--;
  }
  while(quick){
      low = low.next;
      quick = quick.next;
  }

  // 删除最后一个则直接为null
  if(n==1)
      low.next = null;
  else{
      low.next = low.next.next
  }
  return ans.next;
};
