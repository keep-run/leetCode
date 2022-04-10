/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
 *
 * https://leetcode-cn.com/problems/merge-in-between-linked-lists/description/
 *
 * algorithms
 * Medium (75.51%)
 * Likes:    41
 * Dislikes: 0
 * Total Accepted:    15.8K
 * Total Submissions: 21K
 * Testcase Example:  '[0,1,2,3,4,5]\n3\n4\n[1000000,1000001,1000002]'
 *
 * 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
 * 
 * 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。
 * 
 * 下图中蓝色边和节点展示了操作后的结果：
 * 
 * 请你返回结果链表的头指针。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
 * 输出：[0,1,2,1000000,1000001,1000002,5]
 * 解释：我们删除 list1 中下标为 3 和 4 的两个节点，并将 list2 接在该位置。上图中蓝色的边和节点为答案链表。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 =
 * [1000000,1000001,1000002,1000003,1000004]
 * 输出：[0,1,1000000,1000001,1000002,1000003,1000004,6]
 * 解释：上图中蓝色的边和节点为答案链表。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= list1.length <= 10^4
 * 1 <= a <= b < list1.length - 1
 * 1 <= list2.length <= 10^4
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let list1_cur = list1
  let list1_prev = null;
  let list1_index = 0;
  let list2_head = list2_tail = list2;
  // 找到list2的尾节点
  while (list2_tail.next) {
    list2_tail = list2_tail.next;
  }

  while (list1_cur) {
    if (list1_index < a) {
      list1_prev = list1_cur;
    }
    list1_cur = list1_cur.next;
    list1_index++;
    if (list1_index === a) {
      list1_prev.next = list2_head
    }
    if (list1_index === b) {
      list2_tail.next = list1_cur.next;
      break;
    }
  }

  // let index = 0;
  // let p_cur = list1;
  // let p_temp = null;
  // let deleteLength = b - a;
  // // 结束的时候 p_cur在list2的尾部
  // while (p_cur.next) {
  //   if (index === a - 1) {
  //     p_temp = p_cur.next
  //     p_cur.next = list2
  //   } else {
  //     p_cur = p_cur.next
  //   }
  //   index++;
  // }

  // // 结束时 p_a === p_b
  // while (deleteLength--) {
  //   p_temp = p_temp.next
  // }

  // p_cur.next = p_temp.next;
  return list1;
};
// @lc code=end

