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
 * 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var pathSum = function(root, targetSum) {
  const answer = []
  function search(root, path) {
    if (isInvalid(root)) return;

    path.push(root.val)

    const sumPath = getSumPath(path, targetSum)
      if (sumPath.length) {
        answer.concat(sumPath)
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

function getSumPath(paths, sum) {
  const len = paths.length
  const targetPath = []
  for (let i = 0; i < paths.length; i++) {
    const res = paths.slice(i).reduce((accumulator, currentValue)=>{
      return accumulator + currentValue
    })
    if (res === sum) {
      targetPath.push(paths.slice(i))
    }
  }
  return targetPath
}

function isInvalid(node) {
  return !node || node.val === undefined || node.val === null;
}