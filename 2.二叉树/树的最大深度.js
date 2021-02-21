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
var maxDepth = function(root) {
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
// 感悟：
// 1.广度就是一直不停地取左右节点，取到就push入数组，并记下次数。
//      然后下次循环再shift出来重复找左右，重复上步。
// 或许while+queue数组就叫广度搜索把
// 2.广度查找的核心思想在于：从上到下或者从下到上开始一层层的找 遇到的第一个没有left和right节点的节点就是离根节点最近的节点，也就是最小深度所在节点。
// 3.深度查找的核心思想在于：每条路都走到底，利用递归来算出所有路的深度，从中min出一个最小的。