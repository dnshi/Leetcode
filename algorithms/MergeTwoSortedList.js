// Source : https://oj.leetcode.com/problems/merge-two-sorted-lists/
// Author : Dean Shi
// Date   : 2015-06-11

/**********************************************************************************
 *
 * Merge two sorted linked lists and return it as a new list. The new list should be
 * made by splicing together the nodes of the first two lists.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result, node;
    result = node = new ListNode();

    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }
    node.next = l1 ? l1 : l2;
    return result.next;
};
