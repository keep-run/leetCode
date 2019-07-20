/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 * 
 * 分析：容器大小的决定因素：  宽：两个线条的距离，高：较短的线的高度。
 * 先计算宽最大的矩形，然后，保留较高的边，让矩形框的宽度减一。循环以上过程
 * 
 */
var maxArea = function(height) {
    let left=0,right=height.length-1,res=0,temp
    while(left<right){
        temp=(right-left)*(height[left]>height[right]?height[right]:height[left])
        if(temp>res){
            res=temp
        }
        if(height[left]>height[right]){
            right--
        }else{
            left++
        }
    }
    return res;

};

