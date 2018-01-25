// Source : https://leetcode.com/problems/linked-list-cycle
// Author : Dean Shi
// Date   : 2018-01-25

/***************************************************************************************
 * 
 * Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false

    let slowerPointer = head
    let fasterPointer = head.next

    while (slowerPointer && fasterPointer && fasterPointer.next) {
        if (slowerPointer === fasterPointer) return true

        slowerPointer = slowerPointer.next
        fasterPointer = fasterPointer.next.next
    }

    return false
};
