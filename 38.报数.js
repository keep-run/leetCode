/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 * 
 * 题目解读：找出数组[1,11,21,1211,111221,...]的第n项
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let item = "1", temp = '', count,i,j
    for ( i = 1; i < n; i++) {
        temp = ''
        //遍历item
        for ( j = 0, len = item.length; j < len; j++) {
            count = 1;
            while (item.charAt(j) == item.charAt(j + 1)) {
                j++;
                count++
            }
            temp += (count + item.charAt(j))
        }
        item = temp;
    }
    return item;
};

