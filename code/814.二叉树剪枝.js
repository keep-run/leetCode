/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
 *
 * https://leetcode-cn.com/problems/binary-tree-pruning/description/
 *
 * algorithms
 * Medium (70.18%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    28.1K
 * Total Submissions: 40K
 * Testcase Example:  '[1,null,0,0,1]'
 *
 * 给你二叉树的根结点 root ，此外树的每个结点的值要么是 0 ，要么是 1 。
 * 
 * 返回移除了所有不包含 1 的子树的原二叉树。
 * 
 * 节点 node 的子树为 node 本身加上所有 node 的后代。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,0,0,1]
 * 输出：[1,null,0,null,1]
 * 解释：
 * 只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,0,1,0,0,0,1]
 * 输出：[1,null,1,null,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,1,0,1,1,0,1,0]
 * 输出：[1,1,0,1,1,null,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [1, 200] 内
 * Node.val 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {

  function dfs(node) {
    if (!node) {
      return false;
    }
    let leftFlag = dfs(node.left)
    let rightFlag = dfs(node.right)
    if (!leftFlag) {
      node.left = null
    }
    if (!rightFlag) {
      node.right = null
    }
    return node.val === 1 || leftFlag || rightFlag
  }
  dfs(root)

  // 根节点也剪调的case
  if (!root.left && !root.right && root.val === 0) {
    return null
  }
  return root
};
// @lc code=end

