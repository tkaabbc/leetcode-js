/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路
 * 重点是创建一个新节点dummy
 * l1和l2两两比较，小的就往新节点上挂
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 迭代解法
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode()
  let cur = dummy
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      l2 = l2.next
    } else {
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next
  }

  // l1 和 l2 某个或都遍历完了，即while (l1 && l2)不满足了走到这
  if (l1) cur.next = l1
  if (l2) cur.next = l2

  return dummy.next
};

// 递归解法
var mergeTwoLists = function(l1, l2) {
  // 考虑终点情况
  if (!l1 && l2) {
    return l2
  } else if (l1 && !l2) {
    return l1
  } else if (!l1 && !l2) {
    return null
  }

  let l
  if (l1.val > l2.val) {
    l = l2  // 处理一个节点
    l.next = mergeTwoLists(l1, l2.next) // 用同样的办法处理下一个节点
  } else {
    l = l1
    l.next = mergeTwoLists(l1.next, l2)
  }

  return l
};
