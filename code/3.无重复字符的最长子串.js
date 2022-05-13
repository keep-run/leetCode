/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.70%)
 * Likes:    7543
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  // 用一个set来判断是否有重复,也可以用一个object
  const helpSet = new Set()
  let leftIndex = rightIndex = 0;
  let length = s.length
  for (let leftIndex = 0; leftIndex < length; leftIndex++) {
    // 移动到当前节点  删除前一个字符
    if (leftIndex !== 0) {
      helpSet.delete(s[leftIndex-1])
    }
    // 右指针停止移动的标志：到结尾 || 发现重复字符
    while (rightIndex < length && !helpSet.has(s[rightIndex])){
      // 放入set，且继续向后移动
      helpSet.add(s[rightIndex])
      rightIndex++;
    }

    ans = Math.max(ans,rightIndex - leftIndex)
    // 已经到结尾了
    if(rightIndex === length){
      break;
    }
  }
  return ans
};
// @lc code=end

