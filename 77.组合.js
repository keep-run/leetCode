/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (66.97%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    13.2K
 * Total Submissions: 19.2K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 解题思路： 回溯法
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []
    function backtrack(first, curr = []) {
        if (curr.length === k) {
            res.push(curr.slice())
        } else {
            for (let i = first; i < n + 1; i++) {
                curr.push(i);
                backtrack(i+1,curr);
                curr.pop();
            }
        }
    }
     backtrack(1,[])
     return res
};



