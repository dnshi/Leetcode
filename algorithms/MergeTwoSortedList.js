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
    let newList = null;
    
    if (l1 === null || l2 === null) {
        return l1 || l2
    }
    
    if (l1.val < l2.val) {
        (newList = new ListNode(l1.val)).next = mergeTwoLists(l1.next, l2)
    } else {
        (newList = new ListNode(l2.val)).next = mergeTwoLists(l1, l2.next)
    }
    
    return newList
};
