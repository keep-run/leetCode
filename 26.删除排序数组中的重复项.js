/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * 
 * 双指针方法， i为慢指针，j为快指针。 当num[i]==num[j]时，j向下跳一项；
 * 当num[i]!==num[j]时。 i向下跳一项，num[i]=num[j];
 * 
 * 最后删出i之后的项，即为新数组；i+1即为新数组的长度
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len=nums.length;
    let i=0;
    if(len==0){return 0}
    for(let j=1;j<len;j++){
        if(nums[i]!==nums[j]){
            nums[++i]=nums[j]
        }
    }
    return i+1  //没有手动删除i后边的数组项。 因为对新数组遍历到i即为新的无重复数组
};

