// Source : https://leetcode.com/problems/swap-nodes-in-pairs/
// Author : Dean Shi
// Date   : 2017-07-05

/***************************************************************************************
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Your algorithm should use only constant space. You may not modify the values in the
 * list, only nodes itself can be changed.
 *
 *
 ***************************************************************************************/

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
var swapPairs = function(head) {
    if (head && head.next) {
        const next = head.next

        head.next = swapPairs(next.next)
        next.next = head
        return next
    }
    return head
};
