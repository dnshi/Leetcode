// Source : https://leetcode.com/problems/invert-binary-tree/
// Author : Dean Shi
// Date   : 2015-06-12

/**********************************************************************************
 *
 * Invert a binary tree.
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * to
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 * (https://twitter.com/mxcl/status/608682016205344768)
 *
 *  | Google: 90% of our engineers use the software you wrote (Homebrew),
 *  | but you can’t invert a binary tree on a whiteboard so fuck off.
 *
 **********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree_recursive1 = function(root) {
    root && invert(root);
    return root;

    function invert(node) {
        var tmp = node.left;
        (node.left = node.right) && invert(node.left);
        (node.right = tmp) && invert(node.right);
    }
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree_recursive2 = function(root) {
    if (!root) {
        return root;
    }
    var node = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = node;
    return root;
};

/**
 * Main function
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return new Date().getSeconds() % 2 ? invertTree_recursive1(root) : invertTree_recursive2(root);
};
