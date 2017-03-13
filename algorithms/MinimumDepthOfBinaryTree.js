// Source : https://leetcode.com/problems/minimum-depth-of-binary-tree
// Author : Dean Shi
// Date   : 2017-03-11

/***************************************************************************************
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node
 * down to the nearest leaf node.
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
var minDepth = function(root) {
    if (!root) return 0
    if (!root.left) return minDepth(root.right) + 1
    if (!root.right) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
