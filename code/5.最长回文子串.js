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
    // let len = s.length;
    // if (len === 0 || len === 1) {
    //     return s
    // }

    // let i, j, k;
    // let res = '', temp = 0;

    // //假设回文串都为偶数
    // k = 0
    // while (k < len) {
    //     i = k;
    //     j = k + 1;
    //     while (i >= 0 && j < len && s[i] === s[j]) {
    //         i--;
    //         j++;
    //     }
    //     temp = j - i - 1
    //     if (res.length <= temp) {
    //         res = s.substring(i + 1, j)
    //     }
    //     k++;
    // }

    // //假设回文串为奇数
    // k = 1;
    // while (k < len) {
    //     i = k - 1;
    //     j = k + 1;
    //     while (i >= 0 && j < len && s[i] === s[j]) {
    //         i--;
    //         j++;
    //     }
    //     temp = j - i - 1
    //     if (res.length <= temp) {
    //         res = s.substring(i + 1, j)
    //     }
    //     k++;
    // }
    // return res;

    let ansIndex = [0, 0];

    for (let i = 0; i < s.length; i++) {
        let indexArr1 = expandAroundCenter(s, i, i);   //回文串为奇数，以i为中心
        let indexArr2 = expandAroundCenter(s, i, i + 1) //回文串为偶数，以i，i+1为中心
        ansIndex = maxLengthArr(ansIndex, indexArr1, indexArr2)
    }
    return s.substring(ansIndex[0] + 1, ansIndex[1])
};

function maxLengthArr(...arr) {
    let ans = [0, 0]
    for (let item of arr) {
        if ((item[1] - item[0]) > (ans[1] - ans[0])) {
            ans = item;
        }
    }
    return ans
}

// 从left向左找，从right向右找， 如果相等，则是符号要求的串
function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return [left, right]
}


