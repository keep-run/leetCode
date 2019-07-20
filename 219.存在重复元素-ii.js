/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (34.92%)
 * Likes:    92
 * Dislikes: 0
 * Total Accepted:    16.6K
 * Total Submissions: 47.3K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */
/**个人觉得题目表述有问题
 * 应该是：给定一个整数数组和一个整数 k，
 * 判断数组中是否存在两个不同的索引 i 和 j，
 * 使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值小于 k。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 方法一： 用一个对象存储信息
// var containsNearbyDuplicate = function (nums, k) {
//     let obj = {};
//     for(let i=0,len=nums.length;i<len;i++){
//         if (obj[nums[i]]) {
//             if(i-obj[nums[i]][0]<=k){
//                 return true
//             }
//             obj[nums[i]][0] = i
//         } else {
//             obj[nums[i]] = [i]
//         }  
//     }
//     return false
// };



// 方法二： 保存一个浮窗，在浮窗内部找与浮窗尾部相等的元素
var containsNearbyDuplicate = function (nums, k) {
    let temp = -1;
    let start
    for (let i = 0, len = nums.length; i < len; i++) {
        start=Math.max(i-k,0)
        temp = nums.indexOf(nums[i], start)
        if (temp >= 0 && temp < i) {
            return true
        }
    }
    return false
};

