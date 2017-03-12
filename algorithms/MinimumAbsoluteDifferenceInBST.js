// Source : https://leetcode.com/problems/minimum-absolute-difference-in-bst
// Author : Dean Shi
// Date   : 2017-03-11

/***************************************************************************************
 *
 * Given a binary search tree with non-negative values, find the minimum absolute
 * difference between values of any two nodes.
 *
 * Example:
 *
 * Input:
 *
 *    1
 *     \
 *      3
 *     /
 *    2
 *
 * Output:
 * 1
 *
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and 1 (or
 * between 2 and 3).
 *
 * Note:
 * There are at least two nodes in this BST.
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const hash = []
    let result = Number.MAX_SAFE_INTEGER
    helper(root, hash)

    hash.sort((a,b) => a - b)

    let curr, diff, prev = hash[0]
    for (let i = 1; i < hash.length; i++) {
      curr = hash[i]
      diff = curr - prev
      if (diff < result) result = diff
      prev = curr
    }

    return result
};

function helper(root, hash) {
  if (!root) return

  hash.push(root.val)

  helper(root.left, hash)
  helper(root.right, hash)
}
