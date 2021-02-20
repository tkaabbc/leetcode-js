// 写在前面：这题看力扣上的动画就秒理解了🙄️。
// 我清晰记得，以前在数据结构课上，老师和我们说：涉及到链表的操作，一定要在纸上把过程先画出来，再写程序。
// 现在想想，这句话简直是真理啊！

// 好理解的双指针
// 定义两个指针： prepre 和 curcur ；prepre 在前 curcur 在后。
// 每次让 prepre 的 nextnext 指向 curcur ，实现一次局部反转
// 局部反转完成之后，prepre 和 curcur 同时往前移动一个位置
// 循环上述过程，直至 prepre 到达链表尾部
// 动画参考：https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-shuang-zhi-zhen-di-gui-yao-mo-/
// 从动画可以总结出：代码中能拿操作的就是指针，要利用好指针来做文章

// 画图: pre在左，cur在右边，一起往右边移动
// null 5->4->3->2->1 null
// pre cur
// null<-5 4->3->2->1 null
//     pre cur

function reverse(head) {
  // 1定义两个指针 
  let prev = null
  let cur = head
  while (cur) {
    // 2修改
    let next = cur.next
    cur.next = prev

    // 3移动指针
    prev = cur
    cur = next
  }
  // 返回反转后的头节点
  return prev
}