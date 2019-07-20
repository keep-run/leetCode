/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (54.80%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    15.4K
 * Total Submissions: 27.6K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**解题思路：回溯法 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let len = candidates.length;
    let res = [];
    function backTrack(first, curr) {
        if (curr.length > 0 && curr.reduce((prev, cur) => prev + cur) === target) {
            res.push(curr.slice())
            return
        } else if (curr.length > 0 && curr.reduce((prev, cur) => prev + cur) > target) {
            return
        } else {
            for (let i = first; i < len; i++) {
                if (i > first && candidates[i] == candidates[i - 1]) {
                    continue
                }
                curr.push(candidates[i])
                backTrack(i + 1, curr)
                curr.pop();
            }
        }
    }
    backTrack(0, []);
    return res;
};

