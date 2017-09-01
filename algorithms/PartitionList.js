// Source : https://leetcode.com/problems/partition-list
// Author : Dean Shi
// Date   : 2017-09-01

/***************************************************************************************
 *
 * Given a linked list and a value x, partition it such that all nodes less than x come
 * before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the two
 * partitions.
 *
 * For example,
 * Given 1->4->3->2->5->2 and x = 3,
 * return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let headNode, headpt, tailNode, tailpt

    headNode = headpt = new ListNode()
    tailNode = tailpt = new ListNode()

    while (head) {
        if (head.val < x) {
            headpt = headpt.next = head
        } else {
            tailpt = tailpt.next = head
        }
        head = head.next
    }

    [headpt.next, tailpt.next ] = [tailNode.next, null]

    return headNode.next
};
