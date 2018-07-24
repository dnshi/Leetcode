// Source : https://oj.leetcode.com/problems/add-two-numbers/
// Author : Dean Shi
// Date   : 2015-06-01

/**********************************************************************************
 *
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
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
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0)
    let curr = result, carry = 0
    
    while (l1 || l2) {
        if (l1) {
            carry += l1.val
            l1 = l1.next
        }
        
        if (l2) {
            carry += l2.val
            l2 = l2.next
        }
        
        curr = curr.next = new ListNode(carry % 10)
        carry = ~~(carry / 10)
    }
    
    if (carry !== 0) curr.next = new ListNode(carry)
    return result.next
};
