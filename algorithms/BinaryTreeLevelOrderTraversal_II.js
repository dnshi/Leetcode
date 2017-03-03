// Source : https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// Author : Dean Shi
// Date   : 2017-03-02

/***************************************************************************************
 *
 * Given a binary tree, return the bottom-up level order traversal of its nodes'
 * values. (ie, from left to right, level by level from leaf to root).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * return its bottom-up level order traversal as:
 *
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const stack = []
    const result = []
    let index = 0
    while (root) {
        if (!result[index]) result[index] = []
        result[index].push(root.val)

        if (root.right) stack.push([root.right, index + 1]);
        if (root.left) stack.push([root.left, index + 1]);
        [root, index] = stack.pop() || []
    }
    return result.reverse()
};
