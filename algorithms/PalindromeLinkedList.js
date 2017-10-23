// Source : https://leetcode.com/problems/palindrome-linked-list
// Author : Dean Shi
// Date   : 2017-10-21

/***************************************************************************************
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
    const stack = []

    while (head) {
        stack.push(head.val)
        head = head.next
    }

    return stack.join('') === stack.reverse().join('')
};