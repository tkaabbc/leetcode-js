/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 总结
 * 记住前中后的写法就好了，待理解具体为什么前中后这三种会经典
 * 注意这里如果在全局定义一个 var result = []，会造成leetcode中跑测试用例时result被多个测试用例使用；所以要么用函数包起来，要么透传res
 * 
 * 要知道节点访问的顺序
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root, result = []) {
  if (!root) return []
  result.push(root.val)
  preorderTraversal(root.left, result)
  preorderTraversal(root.right, result)
  return result

  // // 中序
  // preorderTraversal(root.left, result)
  // result.push(root.val)
  // preorderTraversal(root.right, result)

  // // 后序
  // preorderTraversal(root.left, result)
  // preorderTraversal(root.right, result)
  // result.push(root.val)
};
