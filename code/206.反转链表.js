/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (60.51%)
 * Likes:    436
 * Dislikes: 0
 * Total Accepted:    59.9K
 * Total Submissions: 97.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
var reverseList = function (head) {
    if(!head){
        return head
    }
    let p1 = null;
    let p2 = head.next;
    while (p2) {
        head.next = p1;
        p1 = head;
        head = p2;
        p2 = head.next
    }
    head.next=p1
    return head
};

