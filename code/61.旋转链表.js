/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.70%)
 * Likes:    757
 * Dislikes: 0
 * Total Accepted:    243.6K
 * Total Submissions: 584.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  let p_tail = head;
  let p_temp = head;
  let p_head = null;
  let length = 1;
  while (p_tail.next) {
    length++;
    p_tail = p_tail.next
  }
  const rotateLength = k % length
  // 旋转一整圈 相当于没有旋转，直接返回原来的head
  if (rotateLength === 0) {
    return head;
  }
  // 先把原链表形成环
  p_tail.next = head;
  // 向右移动 rotateLength 个节点，  
  // 原来第length - rotateLength个节点 成了新的头节点是p_head;
  // p_head前一个位置断开环即可
  let head_prev_index = length - rotateLength
  while (head_prev_index > 1) {
    p_temp = p_temp.next;
    head_prev_index--;
  }
  p_head = p_temp.next;
  p_temp.next = null
  return p_head
};
// @lc code=end

