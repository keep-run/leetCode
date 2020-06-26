/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (63.03%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    41.2K
 * Total Submissions: 64.3K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */


/**解题思路：递归，携值递归 */
var binaryTreePaths = function (root) {
  if(!root){
    return []
  }
  let res = []
  function help(node, data) {
    data.push(node.val)
    //叶子节点
    if (!node.left && !node.right) {
      res.push(data.join('->'))
    }
    if(node.left){
      help(node.left,[...data])
    }
    if(node.right){
      help(node.right,[...data])
    }
  }
  help(root,[]);
  return res
};
// @lc code=end

