/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (68.00%)
 * Likes:    248
 * Dislikes: 0
 * Total Accepted:    59.4K
 * Total Submissions: 84.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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

// ----------------递归法-----------------------
// function lastOrder(current, res) {
//   if (current) {
//     lastOrder(current.left, res);
//     lastOrder(current.right, res);
//     res.push(current.val)
//   }
// }
// var postorderTraversal = function (root) {
//   let res = [];
//   lastOrder(root, res)
//   return res;
// };


// ----------------循环法-----------------------
// var postorderTraversal = function (root) {
//   let res = [];
//   let stack=[];
//   let current=root
//   while(stack.length>0||current){
//     res.unshift(current.val)
//     if(current.left){
//       stack.push(current.left)
//     }
//     if(current.right){
//       stack.push(current.right)
//     }
//     current=stack.pop()
//   }
//   return res
// };

var postorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;
  while(current || stack.length > 0){
    if(current){
      result.unshift(current.val);
    }
    if(current.left) {
      stack.push(current.left)
    }
    if(current.right) {
      stack.push(current.right)
    }
    current = stack.pop();
  }
  return result
};
// @lc code=end

