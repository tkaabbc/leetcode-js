/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = []
  if (!root) return res;
  const queue = [[root, 0]];

  while(queue.length) {
      const [p, level] = queue.shift();
      if (!res[level]) {
          res[level].push(p.val)
      } else {
          res[level] = []
          res[level].push(p.val)
      }
      if (p.left) queue.push([p.left, level + 1]);
      if (p.right) queue.push([p.right, level + 1]);
  }
  return res
};

/**
 * 在while中用for来遍历那一层的写法
 * @param {}} root 
 */
var levelOrder = function(root) {
  let res = []
  if (!root) return res;
  const queue = [root];
  const level = []
  while(queue.length) {
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        level.push(node.val)
        if (p.left) queue.push(node);
        if (p.right) queue.push(node);
      }
  }
  return res
};