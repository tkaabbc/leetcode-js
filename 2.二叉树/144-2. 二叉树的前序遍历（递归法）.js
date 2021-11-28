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
 * 递归便利是每一个节点都重新执行一遍都左根右
 * 关键是每一个节点都执行
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
var tree = {
  val: 'A',
  left: {
    val:'B',
  },
  right: {
    val:'C',
    right: {
      val: 'D',
      left: {
        val: 'F',
        left: {
          val: 'H',
        },
        right: {
          val: 'G',
        },
      },
      right: {
        val: 'E',
      },
    }
  },
}
var preorderTraversal = function(root, result = []) {
  var hasTravel = false
  if (!root) return []
  console.log(root.val);
  preorderTraversal(root.left, result)
  preorderTraversal(root.right, result)
  result.push(root.val)
  return result
};
console.log(preorderTraversal(tree, []))