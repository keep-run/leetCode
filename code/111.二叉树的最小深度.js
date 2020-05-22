/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (40.27%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    59.1K
 * Total Submissions: 141.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function (root) {
  //空树
  if (!root) {return 0 }
  //只有根节点节点
  if (!root.left&&!root.right) {return 1 }

  //只有左子树
  if(root.left&&!root.right){return 1+minDepth(root.left)}

  //只有右子树
  if(!root.left&&root.right){return 1+minDepth(root.right)}

  return 1+Math.min(minDepth(root.left),minDepth(root.right))

};
// @lc code=end

