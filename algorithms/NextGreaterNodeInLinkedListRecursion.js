// Source : https://leetcode.com/problems/next-greater-node-in-linked-list/
// Author : Dean Shi
// Date   : 2020-10-03

/***************************************************************************************
 * We are given a linked list with head as the first node.  Let's number the nodes in
 * the list: node_1, node_2, node_3, ... etc.
 * 
 * Each node may have a next larger value: for node_i, next_larger(node_i) is the
 * node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible
 * choice.  If such a j does not exist, the next larger value is 0.
 * 
 * Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).
 * 
 * Note that in the example inputs (not outputs) below, arrays such as [2,1,5]
 * represent the serialization of a linked list with a head node value of 2, second
 * node value of 1, and third node value of 5.
 * 
 * Example 1:
 * 
 * Input: [2,1,5]
 * Output: [5,5,0]
 * 
 * Example 2:
 * 
 * Input: [2,7,4,3,5]
 * Output: [7,0,5,5,0]
 * 
 * Example 3:
 * 
 * Input: [1,7,5,1,9,2,5,1]
 * Output: [7,9,9,9,0,5,0,0]
 * 
 * Note:
 * 
 * 1 <= node.val <= 10^9 for each node in the linked list.
 * The given list has length in the range [0, 10000].
 * 
 * 
 ***************************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  if (!head.next) {
      head.largest = head.val
      return [0]
  }
  const result = nextLargerNodes(head.next)
  head.largest = head.next.largest

  let currNum
  if (head.next.val > head.val) {
      currNum = head.next.val
  } else {
      if (head.val >= head.largest) {
          currNum = 0
          head.largest = head.val
      } else {
          currNum = getNextLargeNum(head.val, result)
      }
  }

  result.unshift(currNum)
  return result
};

function getNextLargeNum(num, arr) {
  for (let n of arr) if (num < n) return n
  return 0
}
