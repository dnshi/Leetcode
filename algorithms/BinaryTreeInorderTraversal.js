// Source : https://leetcode.com/problems/binary-tree-inorder-traversal
// Author : Dean Shi
// Date   : 2017-02-27

/***************************************************************************************
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * For example:
 * Given binary tree [1,null,2,3],
 *
 *    1
 *     \
 *      2
 *     /
 *    3
 *
 * return [1,3,2].
 *
 * Note: Recursive solution is trivial, could you do it iteratively?
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
var inorderTraversal = function(root) {
    const stack = []
    const result = []
    while (root) {
        if (root.right) stack.push(root.right)
        stack.push(root.val)
        if (root.left) stack.push(root.left)
        
        root = stack.pop()
        while (root !== void(0) && typeof root !== 'object') {
            result.push(root)
            root = stack.pop()
        }
    }
    return result
};
