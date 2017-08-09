// Source : https://leetcode.com/problems/two-sum-iv-input-is-a-bst
// Author : Dean Shi
// Date   : 2017-08-09

/***************************************************************************************
 *
 * Given a Binary Search Tree and a target number, return true if there exist two
 * elements in the BST such that their sum is equal to the given target.
 *
 * Example 1:
 *
 * Input:
 *     5
 *    / \
 *   3   6
 *  / \   \
 * 2   4   7
 *
 * Target = 9
 *
 * Output: True
 *
 * Example 2:
 *
 * Input:
 *     5
 *    / \
 *   3   6
 *  / \   \
 * 2   4   7
 *
 * Target = 28
 *
 * Output: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, map = new Set()) {
    if (!root) return false
    if (map.has(root.val)) return true

    map.add(k - root.val)
    return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};
