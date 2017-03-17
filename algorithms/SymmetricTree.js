// Source : https://leetcode.com/problems/symmetric-tree
// Author : Dean Shi
// Date   : 2017-03-17

/***************************************************************************************
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around
 * its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * But the following [1,2,2,null,3,null,3]  is not:
 *
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    return JSON.stringify(helper(root.left)) === JSON.stringify(helper(root.right).reverse())
        && (root.left && root.left.val) === (root.right && root.right.val)
};

function helper(root, arr = []) {
    if (root) {
        helper(root.left, arr)
        arr.push(root.val)
        helper(root.right, arr)
    }
    return arr
}
