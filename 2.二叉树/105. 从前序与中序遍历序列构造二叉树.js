/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

 

示例 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路
 * 前序遍历的第一个元素为根节点
 * 中序遍历左根右，左右子树分别在根节点左右两边
 * 前/中序是对树的每个节点都按这个顺序遍历
 * 所以找到左右子树后再递归调用buildTree就能拼成树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  const rootVal = preorder[0]
  const node = new TreeNode(rootVal)
  const i = inorder.indexOf(rootVal)
  node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0,i))
  node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
  return node
};
