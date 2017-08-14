// Source : https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
// Author : Dean Shi
// Date   : 2017-08-14

/***************************************************************************************
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate
 * between).
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
 * return its zigzag level order traversal as:
 *
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
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
var zigzagLevelOrder = function(root) {
    if (!root) return []

    let stack = [root], result = [], index = 0, tmpStack, level

    while (stack.length) {
        level = []
        tmpStack = []
        for (let node of stack) {
            level.push(node.val)
            if (node.left) tmpStack.push(node.left)
            if (node.right) tmpStack.push(node.right)
        }
        result.push(index++ % 2 ? level.reverse() : level)
        stack = tmpStack
    }

    return result
};
