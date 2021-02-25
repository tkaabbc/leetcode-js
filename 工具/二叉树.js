class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 使用方法
// const TreeNode = require('../工具/二叉树')
const t = new TreeNode(5)
t.left = new TreeNode(4)
t.left.left = new TreeNode(11)
t.left.left.left = new TreeNode(7)
t.left.left.right = new TreeNode(2)


module.exports = TreeNode