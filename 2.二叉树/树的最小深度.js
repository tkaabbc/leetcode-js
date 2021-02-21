// 深度优先搜索
// 深度优先感觉就是递归到最后一层，然后一层层return n + 1回去

// 这个tree是我用来测试递归代码的执行顺序
var tree = {
  v: 1,
  left: {
    v:'1l',
    left: {
      v: '2l',
      left: {
        v: '3l',
        left: {
          v: '4l'
        },
        right: {
          v: '4r',
          left: {
            v: '5l',
            left: {
              v: '6l'
            },
            right: {
              v: '6r'
            }
          },
        }
      },
      right: {
        v:'3r'
      },
    }
  },
  right: {
    v:'1r'
  },
}

function minDep(root) {
  let answer = Infinity
  console.log(root.v)
  // null不算一层 所以返回0
  if (root === null) {
      return 0
  }

  // 无左右，说明找到叶子节点了，算第一层，所以返回1
  if (!root.left  && !root.right) {
      return 1
  }
  if (root.left) {
      answer = Math.min(minDep(root.left), answer)
  }
  if (root.right) {
      answer = Math.min(minDep(root.right), answer)
  }
  return answer + 1
}
minDep(tree)

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
// 感悟：
// 1.广度就是一直不停地取左右节点，取到就push入数组，并记下次数。
//      然后下次循环再shift出来重复找左右，重复上步。
// 或许while+queue数组就叫广度搜索把
// 2.广度查找的核心思想在于：从上到下或者从下到上开始一层层的找 遇到的第一个没有left和right节点的节点就是离根节点最近的节点，也就是最小深度所在节点。
// 3.深度查找的核心思想在于：每条路都走到底，利用递归来算出所有路的深度，从中min出一个最小的。
// 4.js是解释执行的，遇到函数调用会压入栈中，先调用的先入栈，等到所有函数压完后开始出栈，也就是从最后一个入栈的函数开始执行；
//  说人话就是：遇到递归是先一条道深入到底，最底层函数因为return了某个值，底层函数就会往下行代码执行，得到结果后就沿着递归来的路往回走了；结论：总得走到底才知道一共有几层吧。