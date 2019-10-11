/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (65.61%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    22.1K
 * Total Submissions: 33.7K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N===0){
        return 0
    }else if(N===1){
        return 1
    }else{

        return fib(N-1)+fib(N-2)
    }
};

/* 尾递归调用 ，参数保留上一次调用的结果  
比如：fib(3，fib(0),fib(1)) --> fib(2,fib(1),fib(2)) --> fib(1,fib(2),fib(3)-->fib(0,fib(3),fib(4)) */
var tailfib = function(N,n1=0,n2=1) {
    if(N===0){
        return n1
    }
    return fib(N-1,n2,n1+n2)
};

/** 用for循环来实现 */
 
var loopfib = function(N) {
    let n1=0,n2=1,temp
   if(N<2){
       return N
   }
   for(let i=2;i<=N;i++){
     temp=n1+n2 ;
     n1=n2;
     n2=temp; 
   }
   return n2
};
// @lc code=end

