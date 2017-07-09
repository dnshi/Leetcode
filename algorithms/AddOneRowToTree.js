// Source : https://leetcode.com/problems/add-one-row-to-tree
// Author : Dean Shi
// Date   : 2017-07-09

/***************************************************************************************
 *
 * Given the root of a binary tree, then value v and depth d, you need to add a row of
 * nodes with value v at the given depth d. The root node is at depth 1.
 *
 * The adding rule is: given a positive integer depth d, for each NOT null tree nodes N
 * in depth d-1, create two tree nodes with value v as N's left subtree root and right
 * subtree root. And N's original left subtree should be the left subtree of the new
 * left subtree root, its original right subtree should be the right subtree of the new
 * right subtree root. If depth d is 1 that means there is no depth d-1 at all, then
 * create a tree node with value v as the new root of the whole original tree, and the
 * original tree is the new root's left subtree.
 *
 * Example 1:
 *
 * Input:
 * A binary tree as following:
 *        4
 *      /   \
 *     2     6
 *    / \   /
 *   3   1 5
 *
 * v = 1
 *
 * d = 2
 *
 * Output:
 *        4
 *       / \
 *      1   1
 *     /     \
 *    2       6
 *   / \     /
 *  3   1   5
 *
 * Example 2:
 *
 * Input:
 * A binary tree as following:
 *       4
 *      /
 *     2
 *    / \
 *   3   1
 *
 * v = 1
 *
 * d = 3
 *
 * Output:
 *       4
 *      /
 *     2
 *    / \
 *   1   1
 *  /     \
 * 3       1
 *
 * Note:
 *
 * The given d is in range [1, maximum depth of the given tree + 1].
 * The given binary tree has at least one tree node.
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d, dir = 'left') {
    if (d === 1) {
        const node = new TreeNode(v);
        [root, node[dir]] = [node, root]
    } else if (root) {
        root.left = addOneRow(root.left, v, d - 1, 'left')
        root.right = addOneRow(root.right, v, d - 1, 'right')
    }
    return root
};
