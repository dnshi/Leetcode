// Source : https://leetcode.com/problems/find-largest-value-in-each-tree-row
// Author : Dean Shi
// Date   : 2017-03-04

/***************************************************************************************
 *
 * You need to find the largest value in each row of a binary tree.
 *
 * Example:
 *
 * Input:
 *
 *           1
 *          / \
 *         3   2
 *        / \   \
 *       5   3   9
 *
 * Output: [1, 3, 9]
 *
 *
 ***************************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return []

  const rows = []
  search(root, rows, 0)

  return rows.map(row => Math.max(...row))
};

function search(root, rows, index) {
  if (!root) return

  rows[index] = rows[index] || []
  rows[index].push(root.val)

  search(root.left, rows, index + 1)
  search(root.right, rows, index + 1)
}
