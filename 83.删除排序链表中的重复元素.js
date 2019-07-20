/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
    let temp = head;
    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
        }
        if (head.next&&head.val !== head.next.val) { head = head.next; }
    }
    return temp
};

