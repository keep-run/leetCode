/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // let len=digits.length;
    let temp=1;
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]+temp>=10){
            digits[i]=digits[i]+temp-10;
            temp=1
        }else{
            digits[i]=digits[i]+temp
            temp=0
        }
    }
    if(temp===1){
        digits.unshift(temp)
    }
    return digits
};

