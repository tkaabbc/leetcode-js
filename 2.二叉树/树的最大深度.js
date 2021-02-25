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
  const maxDepth = 0

  while(queue.length) {
      const [p, level] = queue.shift();
      if (!p.left && !p.right) {
        maxDepth = Math.max(level, maxDepth);
      }
      if (p.left) queue.push([p.left, level + 1]);
      if (p.right) queue.push([p.right, level + 1]);
  }
  return maxDepth
};

/**
 * 深度优先搜索解法
 * @param {} root 
 */
var maxDepth = function(root) {
  let answer = 0
  // null不算一层 所以返回0
  if (root === null) {
      return 0
  }

  // 无左右，说明找到叶子节点了，算第一层，所以返回1
  if (!root.left  && !root.right) {
      return 1
  }
  if (root.left) {
      answer = Math.max(maxDepth(root.left), answer)
  }
  if (root.right) {
      answer = Math.max(maxDepth(root.right), answer)
  }
  return answer + 1
};

// 感悟：
// 1.广度就是一直不停地取左右节点，取到就push入数组，并记下次数。
//      然后下次循环再shift出来重复找左右，重复上步。
// 或许while+queue数组就叫广度搜索把
// 2.广度查找的核心思想在于：从上到下或者从下到上开始一层层的找 遇到的第一个没有left和right节点的节点就是离根节点最近的节点，也就是最小深度所在节点。
// 3.深度查找的核心思想在于：先全是left走到底，left走不通的就原地看right能不能走，right走得通就走right；一条路到底后，回溯上去跑接下去的代码（比如上面的就是跑if (root.right) 部分）利用递归来算出所有路的深度，从中min出一个最小的。

// 2021.2.23感悟
// 广度和深度其实肯定是有本质区别的，不然也不会有两种思想；
// 先知道广度和深度的目的，代码只是它们的实现手段；就像求树的最大和最小深度时，广度和深度的代码就不太一样，但核心思想一样，边边角角不一样；

// 深度和广度的代码执行过程：
// 虽然都判断了p.left和p.right，但深度用的是递归，会先走完left；
// 而广度是把一层的left和right都push到数组里，每次都先走完一层下的left和right，再走下一层；

/// 2021.2.24
// 广（深）度优先搜索，‘搜索’顾名思义可以用于搜索某个满足条件的元素，
// 本质是遍历，区别只在于是按广度还是深度优先；
// 不同的场景下，两者的效率可能会有区别。
