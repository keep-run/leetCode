/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (54.52%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 51.7K
 * Testcase Example:  '3\n2'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 问总共有多少条不同的路径？
 * 
 * 
 * 
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 * 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 * 
 * 
 * 示例 2:
 * 
 * 输入: m = 7, n = 3
 * 输出: 28
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//递归：程序正确，但是提交超时
var uniquePaths = function (m, n) {

    function getPath(i, j) {
        if (i === 1 && j === 1) {
            return 1
        } else if (i === 1) {
            return getPath(i, j - 1)
        } else if (j === 1) {
            return getPath(i - 1, j)
        } else {
            return getPath(i - 1, j) + getPath(i, j - 1)
        }
    }
    return getPath(m, n)
};

//遍历一个二维数组
var uniquePaths = function (m, n) {
    let res = [];
    for (let i = 0; i < m; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                res[i][j] = 1
            }else if(i===0){
                res[i][j]=res[i][j-1]
            }else if(j===0){
                res[i][j]=res[i-1][j]
            }else{
                res[i][j]=res[i-1][j]+res[i][j-1]
            }
        }
    }
    return res[m-1][n-1]
};

