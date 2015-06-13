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
 * @param {ListNode} head
 * @return {ListNode}
 */
// Recursion
var reverseList_recursive = function(head) {
    if (!head) {
        return head;
    }
    var next = head.next;
    head.next = null;

    return reverse(next, head);

    function reverse(curr, prev) {
        if (!curr) {
            return prev;
        }
        next = curr.next;
        curr.next = prev;

        return reverse(next, curr);
    }
};

// Iteration
var reverseList_iterative = function(head) {
    if (!head) {
        return head;
    }
    var node, next;
    next = head.next;
    head.next = null;

    while (next) {
        node = next.next;
        next.next = head;
        head = next;
        next = node;
    }
    return head;
};

// Main function
var reverseList = function(head) {
    return new Date().getSeconds() % 2 ? reverseList_recursive(head) : reverseList_iterative(head);
};
