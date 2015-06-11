// Source : https://oj.leetcode.com/problems/remove-nth-node-from-end-of-list/
// Author : Dean Shi
// Date   : 2015-06-11

/**********************************************************************************
 *
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *
 *    Given linked list: 1->2->3->4->5, and n = 2.
 *
 *    After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var node, prevNth;
    node = prevNth = head;

    for (var i = 0; i < n; ++i) {
        node = node.next;
    }
    if (!node) {
        return head.next;
    }

    while (node.next) {
        node = node.next;
        prevNth = prevNth.next;
    }
    prevNth.next = prevNth.next.next;
    return head;
};
