/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (51.86%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 28.2K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let used = [];
    function backTrack(curr) {
        if (curr.length === len) {
            res.push(curr.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (!used[i]) {
                if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                    continue
                } else {
                    curr.push(nums[i]);
                    used[i] = true
                    backTrack(curr);
                    curr.pop();
                    used[i] = false
                }
            }
        }
    }
    backTrack([]);
    return res;
};

