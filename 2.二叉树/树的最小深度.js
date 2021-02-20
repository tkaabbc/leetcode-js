// 深度优先搜索
// 深度优先感觉就是递归到最后一层，然后一层层return n + 1回去

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
var minDepth = function(root) {
  if (!root) return 0;
  const queue = [[root, 1]];

  while(queue.length) {
      const [p, level] = queue.shift();
      if (!p.left && !p.right) {
          return level;
      }
      if (p.left) queue.push([p.left, level + 1]);
      if (p.right) queue.push([p.right, level + 1]);
  }
};
// 感悟：广度就是一直不停地取左右节点，取到就push入数组，并记下次数。
//      然后下次循环再shift出来重复找左右，重复上步。
// 或许while+queue数组就叫广度搜索把