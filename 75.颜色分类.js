/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 解题方法：
 * 方法1：以普通排序算法来解题（冒泡，选择等）；
 * 方法2：遍历一次数组统计0，1，2的个数。然后重写数组；
 */

//方法1：冒泡
// var sortColors = function (nums) {
//     let i, j, temp, len = nums.length
//     for (i = 0; i < len- 1; i++) {
//         for (j = 0; j < len-i-1; j++) {
//             if (nums[j] >nums[j+1]) {
//                 temp = nums[j]
//                 nums[j]=nums[j+1]
//                 nums[j+1]=temp
//             }
//         }
//     }
// };

//  方法2
// var sortColors = function (nums) {
//     let sumOne = 0, sumTwo = 0, sumZero = 0, len = nums.length
//     for (let i = 0; i < len; i++) {
//         if (nums[i] === 1) {
//             sumOne++
//         }
//         if (nums[i] === 2) {
//             sumTwo++
//         }
//         if (nums[i] === 0) {
//             sumZero++
//         }
//     }
//     nums.length=0;
//     while(sumZero--){
//         nums.push(0)
//     }
//     while(sumOne--){
//         nums.push(1)
//     }
//     while(sumTwo--){
//         nums.push(2)
//     }
// };

//方法三：遍历一次数组。定义两个指针left和right。0和nums[left]换，2和nums[right]换.
var sortColors = function (nums) {
    let left = 0, i = 0;
    let len = nums.length;
    let right = len - 1;
    while (i <= right) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 0) {
            swap(nums, i, left)
            left++;
            i++;
        } else if ((nums[i] === 2)) {
            swap(nums, i, right)
            right--;
        }
    }
}
function swap(nums, i, j) {
    if (i === j) return
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

}
