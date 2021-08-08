// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
/**
 * 思路
 * 前序pre[]
 * 中序in[]
 * pre[0]：根节点
 * in[0]: 左子树的最后一个左节点
 * 中序遍历中，root所在位置左边为左子树（假设右n个数字），右边为右子树（假设有m个）
 * 前序遍历中，第一个为root，root右边n个为左子树，剩下的就是右子树
 * 1.确定根节点
 * 2.在in中找到pre[0]，pre[0]左边的数字全为pre[0]的左子树，右边同理
 * 3.截取出pre和in中的左右子树重复上面的判断就可以
 * 
 * 再分别对 左子树 和 右子树 递归进行上述
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null
  }
  // i是根节点在中序遍历结果中的下标， i是当前左子树的节点个数
  const i = inorder.findIndex(e => e === preorder[0])
  const node = new TreeNode(inorder[i])
  node.left = buildTree(
      preorder.slice(1, i + 1),
      inorder.slice(0, i)
  )
  node.right = buildTree(
      preorder.slice(i + 1),
      inorder.slice(i + 1)
  )
  return node
}
