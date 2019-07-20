/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (60.10%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    16.3K
 * Total Submissions: 26.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 
 * 解题思路：
 * 1、如果出口在第零行，结果唯一：第零行的总和；
 * 2、如果出口在第零列，结果也唯一：第零列的总和；
 * 3、否则结果为出口上方和左方的最小值+出口的值；
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows=grid.length;
    let cols= grid[0].length
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
         if(i===0&&j===0){
            //  res=grid[i][j];
         }else if(i===0){
             grid[i][j]=grid[i][j]+grid[i][j-1]
         }else if(j===0){
            grid[i][j]=grid[i][j]+grid[i-1][j]
         } else{
            grid[i][j]=grid[i][j]+Math.min(grid[i-1][j],grid[i][j-1])
         }
        }
    }
    return grid[rows-1][cols-1]
};

