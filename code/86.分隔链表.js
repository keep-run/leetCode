/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (52.03%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    13.1K
 * Total Submissions: 25.2K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
 * 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let big = new ListNode();
    let small = new ListNode();
    let small_head = small;
    let big_head = big
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            big.next = head;
            big = big.next;
        }
        head = head.next;
    }
    big.next = null
    small.next = big_head.next;
    return small_head.next
};

