/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len=nums.length;
    let temp,flag,i,j
    for(i=0;i<len;i++){
        flag=false;
        if(nums[i]===val){
            for(j=i+1;j<len;j++){
                if(nums[j]!==val){   //找到不相等的元素。 与之交换
                    temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                    flag=true   //表明i后边存在不为val的数。
                    break; 
                }
            }
            if(!flag){
                return i;   //如果没有找到与val不相等的元素。  则直接返回
            }
        }
    }
    return len;
};

