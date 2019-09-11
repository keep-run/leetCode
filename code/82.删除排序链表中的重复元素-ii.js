/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (43.15%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 40.4K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head

    const dummy = new ListNode(-1);
    dummy.next = head;
    let slow = dummy;
    let fast = head;
    while (fast) {
        if (fast.next && fast.val != fast.next.val) {
            if (slow.next == fast) {
                slow = fast
            } else {
                slow.next = fast.next
            }
        }
        fast = fast.next
    }
    //处理最后几项有重复的情况
    if (slow.next.next != fast) {
        slow.next = fast
    }
    return dummy.next
};

