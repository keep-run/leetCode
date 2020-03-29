/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (64.71%)
 * Likes:    175
 * Dislikes: 0
 * Total Accepted:    28.9K
 * Total Submissions: 42.7K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

//  递归法
var buildTree = function (inorder, postorder) {
  let helper = (subInorder) => {
    if(!subInorder||subInorder.length===0){
      return null
    }
    console.log('postorder:::',postorder)
   let temp=postorder.pop();
   let mid=subInorder.indexOf(temp)
   let root=new TreeNode(temp)  
   root.right=helper(subInorder.slice(mid+1))
   root.left=helper(subInorder.slice(0,mid))
   return root
  }
  return helper(inorder)
};
// @lc code=end

