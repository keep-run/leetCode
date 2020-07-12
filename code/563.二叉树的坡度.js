/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 *
 * https://leetcode-cn.com/problems/binary-tree-tilt/description/
 *
 * algorithms
 * Easy (53.78%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 24.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个二叉树，计算整个树的坡度。
 * 
 * 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。
 * 
 * 整个树的坡度就是其所有节点的坡度之和。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * ⁠        1
 * ⁠      /   \
 * ⁠     2     3
 * 输出：1
 * 解释：
 * 结点 2 的坡度: 0
 * 结点 3 的坡度: 0
 * 结点 1 的坡度: |2-3| = 1
 * 树的坡度 : 0 + 0 + 1 = 1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 任何子树的结点的和不会超过 32 位整数的范围。
 * 坡度的值不会超过 32 位整数的范围。
 * 
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
var findTilt = function (root) {
  let tile = 0
  function traverse(node) {
    if (!node) {
      return 0
    }
    let left = traverse(node.left)
    let right = traverse(node.right)
    tile += Math.abs(left - right)
    return left + right + node.val   //返回node树所有节点的和
  }
  traverse(root)
  return tile
};
// @lc code=end

