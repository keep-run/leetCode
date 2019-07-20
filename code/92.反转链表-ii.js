/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (43.12%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    11K
 * Total Submissions: 24.9K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (head.next == null || m === n) {
        return head
    }
    let m_pre = null, pm = head, pn, temp_head = head, index = 1, res
    while (temp_head) {
        if (index == m - 1) {
            pm = temp_head.next
            m_pre = temp_head
        }
        if (index == n) {
            pn = temp_head
            n_next = temp_head.next
        }
        temp_head = temp_head.next;
        index++
    }
    return reverseList(pm, pn, m_pre, head)

    
};
var reverseList = (pm, pn, m_pre,head) => {
    let p1 = null, p2 = pm.next, temp = pm
    while (pm !== pn) {
        pm.next = p1;
        p1 = pm;
        pm = p2
        p2 = p2.next;
    }
    temp.next = pm.next
    pm.next = p1
    if (m_pre) {
         m_pre.next = pn;
     }else{
         return  pm
     }
    return head
}

