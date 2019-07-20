/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//     let i = a.length - 1;
//     let j = b.length - 1;
//     let res = '', temp = 0
//     for (; i >= 0 && j >= 0; i-- , j--) {
//         if (parseInt(a.charAt(i)) && parseInt(b.charAt(j))) {
//             res = temp + res;
//             temp = 1
//         } else if (parseInt(a.charAt(i)) || parseInt(b.charAt(j))) {
//             res = ((1 + temp) % 2) + res;
//         } else {
//             res = temp + res;
//             temp = 0
//         }
//     }

//     console.log("res", res, i, j)
//     //如果 a的长度比较长
//     if (i >= 0) {
//         for (; i >= 0; i--) {
//             res = (temp + parseInt(a.charAt(i))) % 2 + res;
//             temp = Number(temp && a.charAt(i))
//         }
//     } else {

//         for (; j >= 0; j--) {
//             res = (temp + parseInt(b.charAt(j))) % 2 + res;
//             temp = Number(temp && parseInt(b.charAt(j)))
//         }
//     }

//     if (temp) {
//         res = temp + res;
//     }
//     return res
// };


var addBinary = function (a, b) {
    let temp = a.length - b.length
    let res = ""
    //将俩个字符串补全为相同长度。
    while (temp) {
        if (temp < 0) {
            a = "0" + a;
            temp++
        } else {
            b = "0" + b
            temp--
        }
    }
    temp = 0
    for (let i = a.length - 1; i >= 0; i--) {
        if (a.charAt(i) === "1" && b.charAt(i) === "1") {
            //两个"1"
            res = temp + res;
            temp = 1
        } else if (a.charAt(i) === "0" && b.charAt(i) === "0") {
            //连个“0”
            res = temp + res;
            temp = 0
        } else {
            //一个0一个1
            if (temp) {
                res = "0" + res;
                temp = 1
            }else{
                res = "1" + res;
                temp = 0
            }
        }
    }
    if(temp){
        res="1"+res
    }
    return res
};



