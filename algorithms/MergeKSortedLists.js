// Source : https://oj.leetcode.com/problems/merge-k-sorted-lists/
// Author : Dean Shi
// Date   : 2015-06-12

/**********************************************************************************
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var i, tmp;
    while (lists.length >= 2) {
        tmp = [];
        for (i = lists.length - 1; i > 0; i -= 2) {
            tmp.push(mergeTwoLists(lists[i], lists[i - 1]));
        }
        if (i === 0) {
            tmp.push(lists[0]);
        }
        lists = tmp;
    }
    return lists[0] || [];
};

function mergeTwoLists(l1, l2) {
    var result, node;
    result = node = new ListNode();

    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }
    node.next = l1 ? l1 : l2;
    return result.next;
}
