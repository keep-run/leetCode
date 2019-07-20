/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (38.41%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    43.3K
 * Total Submissions: 108.7K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，判断链表中是否有环。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** 解题思路：利用快慢指针。快指针一次走两部。 慢指针一次走一步。 如果有环。则在慢指针刚好走玩一圈时追上。
 * 
 * 本地还可以扩展，求环的起点位置。
 * 参考文正：https://www.cnblogs.com/fankongkong/p/7007869.html
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
};

