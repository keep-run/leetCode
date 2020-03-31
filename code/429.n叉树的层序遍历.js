/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (65.01%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    16.7K
 * Total Submissions: 25.6K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其层序遍历:
 * 
 * [
 * ⁠    [1],
 * ⁠    [3,2,4],
 * ⁠    [5,6]
 * ]
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总数不会超过 5000。
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

// 套两层循环
// var levelOrder = function(root) {
//     let res=[];
//     let current=root?[root]:[]
//     let temp
//     while(current.length){
//       let next=[]
//       temp=[]
//       current.forEach(item=>{
//         temp.push(item.val)
//         if(item.children){
//           next=next.concat(item.children)
//         }
//       })
//       res.push(temp)
//       current=next;
//     }
//     return res
// };

// 基于先序遍历  递归实现
var levelOrder = function (root) {
  let res = [];
  let helper = (data, level) => {
    if (!res[level]) {
      res[level] = []
    }
    res[level].push(data.val)
    if(data.children){
      data.children.forEach(item => {
        helper(item,level+1)
      });
    }
  }
  if(!root){
    return res
  }

  helper(root,0)
  return res
};
// @lc code=end

