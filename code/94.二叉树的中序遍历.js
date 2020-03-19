/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.29%)
 * Likes:    431
 * Dislikes: 0
 * Total Accepted:    122.4K
 * Total Submissions: 173.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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

//  -----------递归-----------------
//   function inorderTree(node,res) {
//     if (node) {
//       inorderTree(node.left,res)
//       res.push(node.val)
//       inorderTree(node.right,res)
//     }
//   }

// var inorderTraversal = function (root) {
//   let res=[]
//   inorderTree(root,res)
//   return res
// };

// ------------- 循环解决-----------------
var inorderTraversal = function (root) {
  let res=[],statck=[];
  let current=root
  while(statck.length>0||current){
   if(current){
     statck.push(current);
     current=current.left
   }else{
     current=statck.pop();
     res.push(current.val);
     current=current.right
   }
  }
  return res
};
// @lc code=end



