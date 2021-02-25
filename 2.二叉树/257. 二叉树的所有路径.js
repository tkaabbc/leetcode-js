//https://leetcode-cn.com/problems/binary-tree-paths/

/**
 * 深度优先搜索解法
 * @param {} root 
 */
var binaryTreePaths = function(root) {
  if(!root) return []
 let answer = []
 const prefix = '->'
 const getPath = (root, before) => {
     if (!root.left && !root.right) {
         answer.push(`${before}`)
     }
     if (root.left) {
         getPath(root.left, `${before}${prefix}${root.left.val}`)
     }
     if (root.right) {
         getPath(root.right, `${before}${prefix}${root.right.val}`)
     }
 }
 getPath(root, root.val)
 return answer
};

// 感悟：
// 递归求所有情况必须借助函数之外的数组，递归求最值可以不用函数外的变量

// 广度优先搜索
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  const answer = []
  const nodeQueue = [root];
  const pathQueue = [`${root.val}`]
  const prefix = '->'

  while(nodeQueue.length) {
      const node = nodeQueue.shift();
      const path = pathQueue.shift();
      if (!root.left && !root.right) {
        answer.push(path)
      } else {
        if (node.left) {
          nodeQueue.push(node.left);
          pathQueue.push(`${path}${prefix}${node.left.val}`)
        }
        if (node.right) {
          nodeQueue.push(node.right);
          pathQueue.push(`${path}${prefix}${node.right.val}`)
        }
      }
  }
  return answer
};
// 技巧：1.广度解法中，两个路径同时push和shift存取就能保证node和path具有一一对应的关系。

// 后期可以总结深度和广度的题目
// 