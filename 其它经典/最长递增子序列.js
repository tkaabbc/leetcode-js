/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
let arr = [2,9,3,6,5,1,7]
let maxLen = 1

/**
 * 回溯解法
 * @param {i} i 
 * @param {最大子串最后一个数} num 
 * @param {当前子串长度} l 
 * @param {选择情况} res 
 */
function longestSon(i, num, l, res) {
    console.log(res);
    
    maxLen = l > maxLen ? l : maxLen
    if (i === arr.length) {
        console.log(maxLen);
        
        return maxLen        
    }

    if (num === -1 || num < arr[i]) { // -1代表选第一个数字，第一个特殊处理
        // 选
        let newRes = [...res, arr[i]]

        longestSon(i+1, arr[i], l+1, newRes)
        // 不选
        let newRes2 = [...res]

        longestSon(i+1, num, l, newRes2)
    } else {
        longestSon(i+1, num, l, res)
    }
}
longestSon(0, -1, 0, [])

// 动态规划解法
// dp[i]表示以arr[i]这个数结尾的最长上升子序列的长度
// 所以dp[i]不一定就是所有结果里面最大的，有可能dp[i-3]才是最大的

// public class Solution {

//     public int lengthOfLIS(int[] nums) {
//         int len = nums.length;
//         if (len < 2) {
//             return len;
//         }

//         int[] dp = new int[len];
//         Arrays.fill(dp, 1);

//         for (int i = 1; i < len; i++) {
//             for (int j = 0; j < i; j++) {
//                 if (nums[j] < nums[i]) {
//                     dp[i] = Math.max(dp[i], dp[j] + 1);
//                 }
//             }
//         }

//         int res = 0;
//         for (int i = 0; i < len; i++) {
//             res = Math.max(res, dp[i]); // 找出dp中最大的一个就是结果
//         }
//         return res;
//     }
// }