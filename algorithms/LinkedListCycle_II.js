// Source : https://leetcode.com/problems/linked-list-cycle-ii/
// Author : Dean Shi
// Date   : 2018-01-30

/***************************************************************************************
 * 
 * Given a linked list, return the node where the cycle begins. If there is no cycle,
 * return null.
 * 
 * Note: Do not modify the linked list.
 * 
 * Follow up:
 * Can you solve it without using extra space?
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
var detectCycle = function(head) {
    const hash = new Set()

    while (head) {
        if (hash.has(head)) return head
        hash.add(head)
        head = head.next
    }
    return null
};
