/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.90%)
 * Likes:    260
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 72.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum1 = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let res = []
    function backTrace(first, current) {
        if (current.length === 4) {
            let sum = current.reduce((prev, curr) => prev + curr)
            if (sum === target) {
                res.push(current.slice())
                return
            } else if (sum > target) {
                return
            }
        } else {
            for (let i = first, len = nums.length; i < len; i++) {
                if (i > first && nums[i] === nums[i - 1]) {
                    continue
                } else {
                    current.push(nums[i]);
                    backTrace(i + 1, current)
                    current.pop()
                }
            }
        }
    }
    backTrace(0, []);
    return res
};

/** 两个for循环+两个指针 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let res = [], left, right, temp
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            left = j + 1
            right = len - 1
            while (left < right) {
                temp = nums[i] + nums[j] + nums[left] + nums[right]
                if (temp === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while (nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++
                } else if (temp > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
    return res
};

