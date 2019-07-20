/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.94%)
 * Likes:    1082
 * Dislikes: 0
 * Total Accepted:    64.1K
 * Total Submissions: 279.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 * 解题思路：先对数组排序。然后遍历数组，固定一项作为第一项，
 * 第二项为下一项，第三项指向最后一个，开始搜索。
 * 
 * 注意:排序后的数组，遍历时相同元素只会取一次（为了防止重复的元素）
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortNum = nums.sort((value1,value2)=>(value1-value2));
    let res = [], j, k, temp;
    for (let i = 0, len = sortNum.length; i < len - 2;) {
        j = i + 1;
        k = len - 1;
        while (j < k) {
            temp = sortNum[i] + sortNum[j] + sortNum[k]
            if (temp === 0) {
                    res.push([sortNum[i], sortNum[j], sortNum[k]])
            } 
             if (temp <= 0) {
                 j++
                while(sortNum[j]===sortNum[j-1]){
                    j++;
                }
            } else if(temp>0) {
                k--;
                while(sortNum[k]===sortNum[k+1]){
                    k--
                }
            }

        }

        i++;
        while(sortNum[i]===sortNum[i-1]){
            i++
        }
    }
    return res
};

