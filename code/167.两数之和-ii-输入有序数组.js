/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (50.40%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    45.5K
 * Total Submissions: 89.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


/** 双指针发，一个从前向后，一个从后向前 */
var twoSum = function(numbers, target) {
    let index1=0;
    let index2=numbers.length-1;
    while(index1<index2){
        if(numbers[index1]+numbers[index2]<target){
            index1++;
        }else if(numbers[index1]+numbers[index2]>target){
            index2--;
        }else{
            break
        }
    }
    return [++index1,++index2]
};
// @lc code=end

