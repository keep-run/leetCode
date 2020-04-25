/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 *
 * https://leetcode-cn.com/problems/count-number-of-nice-subarrays/description/
 *
 * algorithms
 * Medium (47.41%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    20.8K
 * Total Submissions: 38.6K
 * Testcase Example:  '[1,1,2,1,1]\n3'
 *
 * 给你一个整数数组 nums 和一个整数 k。
 * 
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 * 
 * 请返回这个数组中「优美子数组」的数目。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,1,2,1,1], k = 3
 * 输出：2
 * 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [2,4,6], k = 1
 * 输出：0
 * 解释：数列中不包含任何奇数，所以不存在优美子数组。
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 * 输出：16
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* 解题思路：先遍历一遍记录所有奇数的位置。然后划窗 

比如： nums=[2,1,2,3,4,5,6] k=2
奇数位置：[1,3,5]
 1,3 位置组成一个窗， 左边可以取到 nums[0] num[1] 一起两种情况，
 右边可以取到num[3],nums[4]两种情况；
  包含nums[1]和nums[3]的优美子数组就有 2*2 两种情况

*/

var numberOfSubarrays = function (nums, k) {
  let odds = []
  let counts = 0
  let leftCount = 0
  let rightCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      odds.push(i)
    }
  }
  if (odds.length < k) {
    return 0
  }
  for (let j = 0; j <= odds.length - k; j++) {
    leftCount = j === 0 ? (odds[j] + 1) : (odds[j] - odds[j - 1])
    rightCount = (odds[j + k] || nums.length) - odds[j + k - 1]
    counts += (leftCount * rightCount)
  }

  return counts
};
// @lc code=end

