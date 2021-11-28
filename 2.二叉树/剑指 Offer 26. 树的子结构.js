/**
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
限制：

0 <= 节点个数 <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * 思路
 * 1.创建一个辅助函数判断两棵树是否相等
 * 2.递归遍历A树的每一个节点作为根结点和B树进行比较
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!B || !A) return false
  return find(A,B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

// 辅助函数判断两棵树是否相等
function find(A, B){
  // B为null说明前面所有都是A.val === B.val 返回true
  if(!B) return true
  if(!A || A.val != B.val) return false
  return find(A.left,B.left) && find(A.right, B.right) // A左跟B左比，A右跟B右比
}
