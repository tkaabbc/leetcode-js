/**
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]



 

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
注意：本题与主站 236 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
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
 * 深度优先搜索解法
 * 这是第一版存在内存溢出、边界情况错误、的解法，请直接看下面改正后的解法
 * @param {} root 
 */
var lowestCommonAncestor = function(root, p, q) {
  let answer = ''
  let pPath = []
  let qPath = []
  const prefix = '->'
  const getPath = (root, before) => {
  console.log('root.val',root.val)
  console.log('root.val === p',root.val === p)

     if (root.val === p) {
        pPath = before
     }
     if (root.val === q) {
        qPath = before
     }
     if (root.left) {
         getPath(root.left, [...before, root.left])
     }
     if (root.right) {
         getPath(root.right, [...before, root.right])
     }
  }
  
  const findLowestFather = () => {
  console.log('pPath',pPath)
  console.log('qPath',qPath)

    if (pPath.length === 1) {
      answer = pPath[0]
    }
    if (qPath.length === 1) {
      answer = qPath[0]
    }
    const minLength = Math.min(pPath.length, qPath.length)
    for (let i = 0; i < minLength; i++) {
      if (pPath[i].val !== qPath[i].val) {
        answer = qPath[i - 1]
      }
    }
  }
  getPath(root, [root])
  console.log('pPath',pPath)
  console.log('qPath',qPath)
  findLowestFather()
  console.log('answer.val',answer.val);
  console.log('answer',answer);
  return answer
};

// note1：我这里记录了所有节点的路径path，会导致内存溢出需要优化（TODO：怎么做剪枝优化？）
// （已经知道怎么优化了，其实是因为我原本解构的写法会创建很多新数组🤦‍♂️getPath(root.left, [...before, root.left])）；
// 答：1剪枝是使用用同一个数组，把递归过程中需要记录下来的值push进去，
// 2等用到刚刚push进的值的递归代码执行完之后，再pop删除掉刚刚那个值
// （因为这个值只在当前递归有用到，用完删掉也没事，其它递归分支中又要push进去别的值，用完也是删掉），
// 而不是解构到新数组中；

// note2：leetcode版本的递归解法太难想到了，感觉看完答案才会想得到，感觉借鉴性不大，先跳过吧；TODO：递归解法
// note3：github版本https://github.com/tkaabbc/leetcode-javascript/blob/master/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.js
// 他用的也不是leetcode官方解法，是先递归找出p和q之后，再递归找出祖先节点，没有存path就没有内存溢出的问题。
// 我的leetcode答案
// 最开始报了‘超过输出限制’的错误，只要把console.log注释掉就好了，因为打印的东西太多超过限制。
// 内存溢出的报错是会显示具体用了多少内存的

// 所以最终总结下：我这里的思路是
// 1.dfs查找p和q的同时，记录p和q的path
// 2.找到pPath和qPath后再for循环一一比较每个node的值，找出最后一个共同的就是最近公共祖先了。

// 拓展
// 若题目问的是树的最近公共祖先，则可能是二叉搜索树、二叉树、普通树、有指向父节点的树
// 每种都有特定的简便解法，可与面试官沟通确认，参考剑指offer
var lowestCommonAncestor = function(root, p, q) {
  let answer = ''
  let pPath 
  let qPath
  const prefix = '->'
  const getPath = (root, before) => {
  console.log('root.val',root.val)
  console.log('root.val === p',root.val === p.val)
    if (pPath && qPath) {
      return
    }

     if (root.val === p.val) {
        pPath = before.slice()
     }
     if (root.val === q.val) {
        qPath = before.slice()
     }
     if (root.left) {
         before.push(root.left)
         getPath(root.left, before)
         before.pop()
         // tip: 这边如果这样写getPath(root.left, [...before, root.left])会导致内存溢出，
         // 因为创建很多个数组，所以得像上面那样传入原来的那一个数组，用完后再pop掉
     }
     if (root.right) {
        before.push(root.right)
         getPath(root.right, before)
         before.pop()
     }
  }
  
  const findLowestFather = () => {
  console.log('pPath',pPath)
  console.log('qPath',qPath)

    if (pPath.length === 1) {
      answer = pPath[0]
    }
    if (qPath.length === 1) {
      answer = qPath[0]
    }
    const minLength = Math.min(pPath.length, qPath.length)
    for (let i = 0; i <= minLength; i++) {
      // 这里是为了兼容pPath和qPath完全相同的情况
        if(!pPath[i] || !qPath[i]) {
            answer = qPath[i -1]
            return
        }
        // 这边pPath和qPath肯定是有公共祖先的，只要找到第一个不等的节点，往前推一个就是相等的了。
      if (pPath[i].val !== qPath[i].val) {
        answer = qPath[i - 1]
        return
      }
    }
  }
  getPath(root, [root])
  console.log('pPath',pPath)
  console.log('qPath',qPath)
  findLowestFather()
  console.log('answer.val',answer.val);
  console.log('answer',answer);
  return answer
};
lowestCommonAncestor(tree, '6', '4')
