/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */

 //使用二分法
var mySqrt = function(x) {
    let low=0,high=x,mid
    while(low<=high){
        mid=Math.floor((low+high)/2)
        if(mid*mid>x){
            high=mid-1
        }else{
           low=mid+1 
        }
    }
    return high
};

