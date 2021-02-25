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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 方法1: 容易想到的，做加法，到根节点最终结果等于targetSum；代码量多
var hasPathSum = function(root, targetSum) {
    const dfs = (root, sum) => {
      if (!root) {
        return false
      }
      console.log('sum', sum);
      if (!root.left && !root.right && Number(root.val) + sum === targetSum) {
        return true
      } else {
          return dfs(root.left, Number(root.val) + sum) || dfs(root.right, Number(root.val) + sum)
      }
    }
    return dfs(root, 0)
};

// 方法2：从根节点开始做减法，叶子节点一定刚刚好等于减剩下的值；代码量少
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return targetSum === root.val
  }

  return hasPathSum(root.left, targetSum - Number(root.val)) || hasPathSum(root.right, targetSum - Number(root.val))
};
console.log(hasPathSum(tree, 4));