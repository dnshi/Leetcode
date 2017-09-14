// Source : https://leetcode.com/problems/find-bottom-left-tree-value
// Author : Dean Shi
// Date   : 2017-09-14

/***************************************************************************************
 *
 * Given a binary tree, find the leftmost value in the last row of the tree.
 *
 * Example 1:
 *
 * Input:
 *
 *     2
 *    / \
 *   1   3
 *
 * Output:
 * 1
 *
 *   Example 2:
 *
 * Input:
 *
 *         1
 *        / \
 *       2   3
 *      /   / \
 *     4   5   6
 *        /
 *       7
 *
 * Output:
 * 7
 *
 * Note:
 * You may assume the tree (i.e., the given root node) is not NULL.
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
var findBottomLeftValue = function(root) {
    const arr = [root]
    let index = 0

    while (index < arr.length) {
        root = arr[index++]
        if (root.right) arr.push(root.right)
        if (root.left) arr.push(root.left)
    }
    return root.val
};
