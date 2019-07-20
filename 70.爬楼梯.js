/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 * 
 * 思路：可以这样想，n个台阶，一开始可以爬 1 步，也可以爬 2 步，
 * 那么n个台阶爬楼的爬楼方法就等于 一开始爬1步的方法数 + 一开始
 * 爬2步的方法数，这样我们就只需要计算n-1个台阶的方法数和n-2个台
 * 阶方法数，同理，计算n-1个台阶的方法数只需要计算一下n-2个台阶和
 * n-3个台阶，计算n-2个台阶需要计算一下n-3个台阶和n-4个台阶……
 * 
 * 最终归纳出一个数列：
 * F(n)=F(n-1)+F(n-2)
 */

//递归， 提交超时
// var climbStairs = function(n) {
//     if(n<=0){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }
//     if(n==2){
//         return 2
//     }
//     return climbStairs(n-1)+climbStairs(n-2)

// };
var climbStairs = function (n) {
    let res = 0, x = 1; y = 2

    if (n <= 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }

    for (let i = 3; i <= n; i++) {
        res = x + y;
        x = y;
        y = res
    }
    return res
}
