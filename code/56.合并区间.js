/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (37.50%)
 * Likes:    158
 * Dislikes: 0
 * Total Accepted:    21.8K
 * Total Submissions: 57.9K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if(intervals.length===0){ return []}
    let sortedArr = intervals.sort((item1, item2) => item1[0] - item2[0])
    let res = []
    for (let i = 0, len = sortedArr.length; i < len-1; i++) {
        if (sortedArr[i][1] >= sortedArr[i + 1][0]) {
            sortedArr[i + 1]=mergeInterval(sortedArr[i] ,sortedArr[i + 1])
        }else{
            res.push(sortedArr[i])
        }
    }
    res.push(sortedArr.pop())
    function mergeInterval(arr1,arr2){
        return [Math.min(...arr1,...arr2),Math.max(...arr1,...arr2)]
    }
    return res
};

