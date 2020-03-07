/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (38.98%)
 * Likes:    420
 * Dislikes: 0
 * Total Accepted:    68.1K
 * Total Submissions: 167K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/** 解法一 ： 把单向列表变为双向列表，两端同时开始开始遍历，然后作比较 */
var isPalindrome = function (head) {
  let cur = head;
  while (cur&&cur.next) {
    cur.next.pre = cur;
    cur = cur.next;
  }
  while (cur) {
    if (cur.val === head.val) {
      head = head.next
      cur = cur.pre
    }else{
      return false
    }
  }
  return true
};
// @lc code=end

