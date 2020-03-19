/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (62.03%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    79.8K
 * Total Submissions: 123.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //-------------递归法------------------
// function preOrder(node,res){
//   if(node){
//     res.push(node.val)
//     preOrder(node.left,res)
//     preOrder(node.right,res)
//   }
// }
// var preorderTraversal = function(root) {
//   let res=[]
//   preOrder(root,res)
//   return res
// };

// ------------循环法----------------------
// var preorderTraversal = function(root) {
//   let res=[]
//   let stack=[]
//   let current=root
//   while(stack.length>0||current){
//     if(current){
//       res.push(current.val)
//       stack.push(current)
//       current=current.left
//     }else{
//       current=stack.pop()
//       current=current.right
//     }
//   }
//    return res
// };

// ------------循环法 二  反过来操作，可实现后续遍历----------------------
var preorderTraversal = function(root) {
  let res=[]
  let stack=[]
  let current=root
  while(stack.length>0||current){
    res.push(current.val)
    if(current.right){
      stack.unshift(current.right)
    }
    if(current.left){
      stack.unshift(current.left)
    }
   
    current=stack.shift()
  }
   return res
};

// @lc code=end

