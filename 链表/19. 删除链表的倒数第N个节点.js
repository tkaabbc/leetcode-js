// 方法
// 1遍历一次算出链表长，再遍历一次把第n个删除
// 2快慢指针
// 参考https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/

// 收获：在对链表进行操作时，一种常用的技巧是添加一个哑节点（dummy node），它的 \textit{next}next 指针指向链表的头节点。这样一来，我们就不需要对头节点进行特殊的判断了。