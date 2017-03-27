// Source : https://leetcode.com/problems/reverse-linked-list-ii
// Author : Dean Shi
// Date   : 2017-03-27

/***************************************************************************************
 *
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 *
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 *
 * return 1->4->3->2->5->NULL.
 *
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === 1) {
        return reverse(head, n - 1)[0]
    }
    head.next = reverseBetween(head.next, m - 1, n - 1)
    return head
};

function reverse(head, n) {
    if (!n) return [head, head.next]

    const [node, nodeNext] = reverse(head.next, n - 1)
    const next = head.next
    next.next = head
    head.next = nodeNext

    return [node, nodeNext]

}
