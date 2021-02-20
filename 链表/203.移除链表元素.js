// 三种方法
// 删除头结点时另做考虑（由于头结点没有前一个结点）
// 添加一个虚拟头结点，删除头结点就不用另做考虑
// 递归

// 删除结点的步骤：分头和非头节点考虑
// - 若删头节点：head = head.next 直接把next赋值给头
// - 若删头节点之后的节点：1找到该结点的前一个结点；2进行删除操作:prev.next = prev.next.next

// 经验总结 cur.next = cur.next.next;表示删除cur之后的那个节点

/**
 * 方法1: 删除头结点时另做考虑法
 * @param {ListNode} head 
 * @param {number} val 
 */
let removeElements1 = function (head, val) {
  // 1.若头节点就是一样的，只能单独删除
  while (head && head.value === val) {
    head = head.next
  }

  // 2.头节点删完了，现在头肯定是不一样的了，就从head.next为起点一个个next下去比较就好了
  let cur = head
  while (cur) {
    if (cur.next.value === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
}

/**
 * 方法2: new一个虚拟头节点
 * @param {ListNode} head 
 * @param {number} val 
 */
let removeElements2 = function (head, val) {
  let dummyNode = new ListNode() // 虚拟头节点
  dummyNode.next = head
  let cur = dummyNode
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next // 这里做了删除，只有修改next才是对链表进行更改；cur = cur.next 只是把另一个地址赋给变量cur
    } else {
      cur = cur.next
    }
  }
  return dummyNode.next
}

// 方法3: 递归
function removeElements3(head, val) {
  if (head == null)
    return null;

  head.next = removeElements3(head.next, val);
  if (head.value == val) {
    return head.next;
  } else {
    return head;
  }
}