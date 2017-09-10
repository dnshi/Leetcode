// Source : https://leetcode.com/problems/sum-of-left-leaves
// Author : Dean Shi
// Date   : 2017-09-09

/***************************************************************************************
 *
 * Find the sum of all left leaves in a given binary tree.
 *
 * Example:
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * There are two left leaves in the binary tree, with values 9 and 15 respectively.
 * Return 24.
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
var sumOfLeftLeaves = function(root) {
    let sum = 0
    const stack = [root]

    while (node = stack.pop()) {
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val
            }
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return sum
};
