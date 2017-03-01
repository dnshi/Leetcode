// Source : https://leetcode.com/problems/reverse-linked-list/
// Author : Dean Shi
// Date   : 2015-06-12

/**********************************************************************************
 *
 * Reverse a singly linked list.
 *
 * click to show more hints.
 *
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Recursion
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head

    let node = reverseList(head.next)
    
    head.next.next = head
    head.next = null
    
    return node
};

/**
 * Iteration
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [prev, next] = [null, null]
    while (head) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
};
