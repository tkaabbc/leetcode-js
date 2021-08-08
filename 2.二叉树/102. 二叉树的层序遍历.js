/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 总结：层序遍历一颗树的本质其实是广度遍历 -> webpack中createGraph分析文件引用也是用到了广度遍历
 * 广度遍历步骤：肯定需要一个队列，首先把第一个节点放入队列中，接下来每次从队列的头部取出一个节点
 * 遍历这个节点之后把 `它能到达的节点` 依次放入队列，重复这个过程直到队列中的节点全部被遍完历为止
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = []
  if (!root) return res;
  const queue = [[root, 0]];

  // // 广度遍历主要思路
  // while (queue.length) {
  //   const [node, level] = queue.shift()
  //   res[level].push(node)
  //   queue.push([node.left, level+1])
  //   queue.push([node.right, level+1])
  // }

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