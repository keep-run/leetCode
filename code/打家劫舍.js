/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */




// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {


  const length = nums.length;
  let res = []
  if (length === 0) {
    return 0
  }
  if (length === 1) {
    return nums[0]
  }

  res[0] = nums[0]
  res[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < length; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1])
  }

  return res[length - 1]
};
// @lc code=end

