/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 * 
 * 实现思路：
 * needle===''  返回0
 * needle.lenth>haystack.length  返回 -1
 * 否则 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len1=haystack.length;
    let len2=needle.length;
    let i,j
    if(len2===0) {return 0}
    if(len2>len1){return -1}
    for(i=0;i<=len1-len2;i++){
        for(j=0;j<len2;j++){
            if(haystack.charCodeAt(i+j)!==needle.charCodeAt(j)){
                break;
            }
        }
        if(j===len2){
            return i;
        }
    }
    return -1
}; 

