var tree = {
  val: '3',
  left: {
    val:'5',
    left: {
      val: '6',
    },
    right: {
      val: '2',
      left: {
        val: '7',
      },
      right: {
        val:'4'
      },
    }
  },
  right: {
    val:'1',
    left: {
      val: '0',
    },
    right: {
      val: '8',
    }
  },
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：
 * 1.借鉴路径总和2中的思路，记录下path
 * 2.定义个函数来计算每个节点的path中有几种情况是符合要求的
 * 
 * 优点：思路直观；缺点：开销大，慢；
 * 执行用时：1140 ms, 在所有 JavaScript 提交中击败了5.10%的用户
 * 内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了11.04%的用户
 * 
 * TODO: 
 * 1可以优化成只记录所有路径的节点和吗？
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var pathSum = function(root, targetSum) {
  let answer = 0
  function search(root, path) {
    if (isInvalid(root)) return;

    path.push(root.val)

    const pathNum = getPathNum(path, targetSum)
    answer += pathNum

    if (root.left) {
      search(root.left, path)
    }
    if (root.right) {
      search(root.right, path)
    }
    path.pop()
  }
  search(root, [])
  return answer
};

/**
 * 计算每个节点的paths中符合要求的路径有几个
 * @param {*} paths 
 * @param {*} sum 
 */
function getPathNum(paths, sum) {
  let num = 0
  for (let i = 0; i < paths.length; i++) {
    const res = paths.slice(i).reduce((accumulator, currentValue)=>{
      return accumulator + currentValue
    })
    if (res === sum) {
      num++
    }
  }
  return num
}

// 判断传入的node是否为有效节点
function isInvalid(node) {
  return !node || node.val === undefined || node.val === null;
}

/**
 * TODO: 
 * 解法二：双递归思路：
 * 第一个递归：用于遍历每个结点（pathSum）
 * 第二个递归：从该节点开始向下找存在的路径个数（countSum）
 * 答案见https://github.com/sl1673495/leetcode-javascript/issues/61
 * 因为没有类似题目类比理解，先跳过，以后遇到类似再回来理解
 */