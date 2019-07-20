/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
const max_num = Math.pow(2, 31) - 1;
const min_num = -Math.pow(2, 31);
var reverse = function (x) {
    let arr = ('' + x).split('');
    let temp = ""
    if (arr[0] == "-" || arr[0] == "+") {
        temp = arr.shift();
    }
    arr = arr.reverse();
    while (arr[0] == "0") {
        arr.shift()
    }
    arr.unshift(temp)
    temp = parseInt(arr.join('') || 0)
    if (temp > max_num || temp < min_num) {
        return 0
    }

    return temp
};

