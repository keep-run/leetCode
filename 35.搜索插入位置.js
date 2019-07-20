/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len=nums.length;
    for(let i=0;i<len;i++){
        if(nums[i]>=target){
            return i
        }
    }
    return len;
    
};

