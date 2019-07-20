/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 
 * 
 * 解题思路： 假如以第n项结尾的最大子序和记为sum[n]，那么存在如下关系：
 * sum[n]=num[n]+max{0,sum[i-1]}
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let ans=nums[0];
//     for(let i=1,len=nums.length;i<len;i++){
//         if(nums[i-1]>0){
//             nums[i]=nums[i-1]+nums[i]
//         }
//         if(nums[i]>ans){
//             ans=nums[i]
//         }
//     }
//     return  ans
// };
var maxSubArray = function(nums) {
    let res=nums[0]
    for(let i=1,len=nums.length;i<len;i++){
     if(nums[i-1]>0){
         nums[i]=nums[i]+nums[i-1]
     }
     if(nums[i]>res){
         res=nums[i]
     }
    }
    return res
}


