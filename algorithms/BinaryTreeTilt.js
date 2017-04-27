// Source : https://leetcode.com/problems/binary-tree-tilt
// Author : Dean Shi
// Date   : 2017-04-27

/***************************************************************************************
 *
 * Given a binary tree, return the tilt of the whole tree.
 *
 * The tilt of a tree node is defined as the absolute difference between the sum of all
 * left subtree node values and the sum of all right subtree node values. Null node has
 * tilt 0.
 *
 * The tilt of the whole tree is defined as the sum of all nodes' tilt.
 *
 * Example:
 *
 * Input:
 *          1
 *        /   \
 *       2     3
 * Output: 1
 * Explanation:
 * Tilt of node 2 : 0
 * Tilt of node 3 : 0
 * Tilt of node 1 : |2-3| = 1
 * Tilt of binary tree : 0 + 0 + 1 = 1
 *
 * Note:
 *
 * The sum of node values in any subtree won't exceed the range of 32-bit integer.
 * All the tilt values won't exceed the range of 32-bit integer.
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
var findTilt = function(root) {
    return postorder(root)[1]
};

function postorder(root, tilt = 0) {
    if (!root) return [0, tilt]
    let left, right
    [left, tilt] = postorder(root.left, tilt);
    [right, tilt] = postorder(root.right, tilt);

    tilt += Math.abs(left - right)
    return [left + right + root.val, tilt]
}
