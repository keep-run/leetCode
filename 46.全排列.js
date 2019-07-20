/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (68.34%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    30.1K
 * Total Submissions: 43K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 解题思路： 回溯法
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//     let res = [];
//     let len = nums.length;
//     function backTrack(start, curr) {
//         if (curr.length === len) {
//             res.push(curr.slice())
//             return
//         } else {
//             for (let i = start; i < start + len; i++) {
//                 if (curr.indexOf(nums[i % len]) !== -1) {
//                     continue
//                 }
//                 curr.push(nums[i % len]);
//                 backTrack(i + 1, curr);
//                 curr.pop();
//             }
//         }
//     }
//     backTrack(0, []);
//     return res;

// };

/**另一种解法 */
var permute = function (nums) {
    let res = [];
    let len = nums.length;
    function backTrack(start, curr) {
        if (curr.length === len) {
            res.push(curr.slice())
            return
        } else {
            for (let i = 0; i <  len; i++) {
                if (curr.indexOf(nums[i]) !== -1) {
                    continue
                }
                curr.push(nums[i]);
                backTrack(i + 1, curr);
                curr.pop();
            }
        }
    }
    backTrack(0, []);
    return res;

};
