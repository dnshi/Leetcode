// Source : https://leetcode.com/problems/reverse-nodes-in-k-group
// Author : Dean Shi
// Date   : 2017-04-17

/***************************************************************************************
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its
 * modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes in the end should
 * remain as it is.
 *
 * You may not alter the values in the nodes, only nodes itself may be changed.
 *
 * Only constant memory is allowed.
 *
 * For example,
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return head

    let [node, next] = reverse(head, k - 1)

    if (!node) return head
    head.next = reverseKGroup(next, k)

    return node
};

function reverse(root, k) {
    if (!root) return [null]
    if (k === 0) return [root, root.next]

    const [node, next] = reverse(root.next, k - 1)

    if (!node) return [null]

    const nextNode = root.next
    nextNode.next = root
    root.next = next
    return [node, next]
}
