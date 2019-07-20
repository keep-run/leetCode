/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.94%)
 * Likes:    876
 * Dislikes: 0
 * Total Accepted:    59.7K
 * Total Submissions: 237.1K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 * 解题思路：遍历字符串，以每个字符为中心向两边扩散，寻找回文串。但是要区分回文串长度是奇数还是偶数
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    if (len === 0 || len === 1) {
        return s
    }

    let i, j, k;
    let res = '', temp = 0;

    //假设回文串都为偶数
    k = 0
    while (k < len) {
        i = k;
        j = k + 1;
        while (i >= 0 && j < len && s[i] === s[j]) {
            i--;
            j++;
        }
        temp = j - i - 1
        if (res.length <= temp) {
            res = s.substring(i + 1, j)
        }
        k++;
    }

    //假设回文串为奇数
    k = 1;
    while (k < len) {
        i = k - 1;
        j = k + 1;
        while (i >= 0 && j < len && s[i] === s[j]) {
            i--;
            j++;
        }
        temp = j - i - 1
        if (res.length <= temp) {
            res = s.substring(i + 1, j)
        }
        k++;
    }
    return res;

};


