/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (73.98%)
 * Likes:    291
 * Dislikes: 0
 * Total Accepted:    27.6K
 * Total Submissions: 37.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /**回溯法 */
var subsets = function(nums) {
    let res=[];
    let len=nums.length;
    function backTrace(start,curr){
        res.push(curr.slice())
        for(let i=start;i<len;i++){
            curr.push(nums[i]);
            backTrace(i+1,curr);
            curr.pop();
        }
    }
    backTrace(0,[]);
    return res;
};

