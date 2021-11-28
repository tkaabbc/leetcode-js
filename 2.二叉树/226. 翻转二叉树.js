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
 * 1交换左右子树
 * 2并递归调用对左右子树的左右子树也进行交换
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
   //递归函数的终止条件，节点为空时返回
   if(root === null) {
     return null;
   }
   //下面三句是将当前节点的左右子树交换
   let tmp = root.right;
   root.right = root.left;
   root.left = tmp;
   //递归交换当前节点的 左子树
   invertTree(root.left);
   //递归交换当前节点的 右子树
   invertTree(root.right);
   //函数返回时就表示当前这个节点，以及它的左右子树
   //都已经交换完了
   return root;
}
