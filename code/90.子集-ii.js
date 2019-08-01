/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (55.56%)
 * Likes:    105
 * Dislikes: 0
 * Total Accepted:    10K
 * Total Submissions: 17.8K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let sortedArr = nums.sort((a, b) => a - b)
    let len = sortedArr.length;
    let res = [];
    function backTrace(first, curr) {
        res.push(curr.slice())
        for (let i = first; i < len; i++) {
            if (i > first && nums[i] === nums[i - 1]) {
                continue
            }
            curr.push(nums[i])
            backTrace(i + 1, curr)
            curr.pop()
        }
    }
    backTrace(0, [])
    return res
};

