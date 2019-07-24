/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 *
 * https://leetcode-cn.com/problems/summary-ranges/description/
 *
 * algorithms
 * Medium (48.19%)
 * Likes:    23
 * Dislikes: 0
 * Total Accepted:    3K
 * Total Submissions: 6.2K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 * 
 * 示例 1:
 * 
 * 输入: [0,1,2,4,5,7]
 * 输出: ["0->2","4->5","7"]
 * 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 * 
 * 示例 2:
 * 
 * 输入: [0,2,3,4,6,8,9]
 * 输出: ["0","2->4","6","8->9"]
 * 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 * 
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let startIndex = 0;
    let res = [];
    let len = nums.length;
    for (let endIndex = 1; endIndex < len + 1; endIndex++) {
        if (nums[endIndex] !== nums[endIndex - 1] + 1) {
            if (startIndex === endIndex - 1) {
                res.push(`${nums[startIndex]}`)
            } else {
                res.push(`${nums[startIndex]}->${nums[endIndex - 1]}`)
            }
            startIndex = endIndex
        }
    }
    return res;
};

