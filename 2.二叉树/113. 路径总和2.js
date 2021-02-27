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
 * path.pop剪枝操作比较有用，需要学会使用
 * 思路：
 * 1递归且记录路径paths
 * 2是叶子节点 且 paths 总和为目标值 =》 推入answer
 * 
 * 收获：
 * 1.可以只使用一个path数组来记录路径以节省内存开销；
 * 但要注意：
 * 1任何一个节点处理完成时，都要把当前节点 pop 出 path 数组；
 * 2注意最终push(path.slice())这里要浅拷贝一下，防止下面的计算污染这个数组
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var pathSum = function(root, targetSum) {
  const answer = []
  function search(root, path) {
    if (isInvalid(node)) return;

    path.push(root.val)

    if (!root.left && !root.right) {
      if (isEqualTargetSum(path, targetSum)) {
        answer.push(path.slice())
      }
    }

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

function isEqualTargetSum(paths, sum) {
  return paths.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
  }) === sum
}

function isInvalid(node) {
  return !node || node.val === undefined || node.val === null;
}