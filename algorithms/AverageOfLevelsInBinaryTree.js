// Source : https://leetcode.com/problems/average-of-levels-in-binary-tree
// Author : Dean Shi
// Date   : 2017-07-09

/***************************************************************************************
 *
 * Given a non-empty binary tree, return the average value of the nodes on each level
 * in the form of an array.
 *
 * Example 1:
 *
 * Input:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is
 * 11. Hence return [3, 14.5, 11].
 *
 * Note:
 *
 * The range of node's value is in the range of 32-bit signed integer.
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
var averageOfLevels = function(root) {
    const result = []

    let sum, n_levels, levels = root ? [root] : []

    while (levels.length) {
        [sum, n_levels] = [0, []]
        for (let l of levels) {
            if (l.left) n_levels.push(l.left)
            if (l.right) n_levels.push(l.right)
            sum += l.val
        }
        result.push(sum / levels.length)
        levels = n_levels
    }
    return result
};
