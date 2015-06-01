// Source : https://oj.leetcode.com/problems/add-two-numbers/
// Author : Xiao Shi
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
// Solution 1:
// Runtime: 276 ms
var addTwoNumbers = function(l1, l2) {
    var arr = [];
    (l1 || l2) && f(arr, l1, l2, 0);
    return arr;
};

function f(arr, l1, l2, n) {
    if (!l1 && !l2) {
        n && arr.push(n);
        return;
    }
    var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + n;
    var m = ~~(sum / 10); // OR (sum / 10) >> 0 OR (sum / 10) | 0

    arr.push(sum % 10);
    f(arr, l1 && l1.next, l2 && l2.next, m);
}

// Solution 2:
// Runtime: 272
// var addTwoNumbers = function(l1, l2) {
//     var sum = l1.val + l2.val;
//     var next1 = l1.next;
//     var next2 = l2.next;
//     var result = new ListNode(sum % 10);
//     var node = result;
//     sum = ~~(sum / 10);

//     while (next1 || next2 || sum !== 0) {
//         if (!next1) {
//             next1 = {
//                 val: 0,
//                 next: null
//             };
//         }
//         if (!next2) {
//             next2 = {
//                 val: 0,
//                 next: null
//             };
//         }
//         sum += next1.val + next2.val;
//         next1 = next1.next;
//         next2 = next2.next;
//         node.next = new ListNode(sum % 10);
//         node = node.next;
//         sum = ~~(sum / 10);
//     }
//     return result;
// };

// Test Case
// ************ Note ************
// It only works for 1st solution
// ******************************
var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};

var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};

var result = addTwoNumbers(l1, l2);

console.log(result.toString() === '7,0,8');
