/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p==null&&q==null){ return true}  //都为空
    if(p==null||q==null) {return false}  //一个空，一个不空
    if(p.val===q.val){   //两个节点相同
       return  isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
    }
    return false  //两个节点不同
};

