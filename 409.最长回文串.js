/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (47.14%)
 * Likes:    52
 * Dislikes: 0
 * Total Accepted:    5.6K
 * Total Submissions: 11.7K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 * 解题思路:
 * 回文串的规则：
 * 1、如果长度为偶数，则所有的字符一定出现偶数次；
 * 2、如果长度为奇数，除了最中间的那个字符出现奇数次，其余的都出现偶数次；
 * 
 * 所以本题先统计每个字符出现的次数。 为偶数，则累加到回文串长度。如果出现过奇数次。则最后长度+1；
 */
/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    let len=s.length,obj={},res=0,hasOdd=false;
    for(let i=0;i<len;i++){
        if(obj[s.charAt(i)]){
            obj[s.charAt(i)]++ 
        }else{
            obj[s.charAt(i)]=1
        }
    }
    Object.keys(obj).forEach(item=>{
        if(obj[item]%2){
            res+=(obj[item]-1)  //如果出现奇数次。则减一得到最大的偶数次
            hasOdd=true
        }else{
            res+=obj[item]
        }
    })
    //曾经字符出现过奇数次。最终回文串保留一个出现奇数次的字符
    return hasOdd?res+1:res 
};

