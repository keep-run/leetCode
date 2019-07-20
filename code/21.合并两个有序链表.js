/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3=new ListNode(-1);
    let res=l3;
    while(l1&&l2){
        if(l1.val<=l2.val){
            l3.next=l1;
            l1=l1.next;
        }else{
            l3.next=l2;
            l2=l2.next;
        }
        l3=l3.next;
    }
    l3.next=l1||l2;   //循环结束之后，l3指向新链表的结尾。 但是要返回的是新链表的开头（除了初始化-1那一项）
   return res.next 
};

