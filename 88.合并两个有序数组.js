/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 
 * 解题方法：
 * 1、先把nums2的数组拼接到nums1第m个元素后边。 然后对着m+n个约束进行排序；
 * 2、新建一个数组nums3.将nums1和nums2按顺序插入。  最后把这个新数组赋值给nums1返回；
 * 3、新数组长度必然为m+n。 从后向前遍历这两个数组。从nums1[m+n-1]依次向前插入；
 */
var merge = function (nums1, m, nums2, n) {
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1]
            m--
        } else {
            nums1[m + n - 1] = nums2[n - 1]
            n--
        }
    }
    while (n > 0) {
        nums1[m + n - 1] = nums2[n - 1]
        n--
    }
};

