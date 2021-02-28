/**
 * todo：迭代法：
 * 下面的解释以及代码是copy的，有待理解总结通用的方法～
 * 
 * 我们也可以用迭代的方式实现递归法的前序遍历，两种方式是等价的，
 * 区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，
 * 其余的实现与细节都相同
 * （递归的时候是把函数推入js函数调用栈中，
 * 迭代的时候就是手动声明一个数组当作栈了）
 * 参考https://github.com/sl1673495/leetcode-javascript/issues/50
 * @param {*} params 
 */
function preorderTraversal(root) {
  let res = []
  let stack = [root]
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
}

// 中序
function preorderTraversal(root) {

}