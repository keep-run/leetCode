/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (64.13%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    22.7K
 * Total Submissions: 34.6K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let len = candidates.length;
    function backTrack(first, curr) {
        if (curr.length > 0 && curr.reduce((prev, cur) => prev + cur) === target) {
            res.push(curr.slice())
        } else if (curr.length > 0 && curr.reduce((prev, cur) => prev + cur) > target) {
            return
        } else {
            for (let i = first; i < len; i++) {
                // 题目给定 candidates数组没有重复元素。所以下边步骤省略
                // if (i > first && candidates[i] === candidates[i - 1]) {
                //     continue
                // }
                curr.push(candidates[i]);
                backTrack(i, curr);
                curr.pop()
            }
        }

    }
    backTrack(0, [])
    return res;
};

