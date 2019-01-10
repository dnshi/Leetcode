// Source : https://leetcode.com/problems/univalued-binary-tree/
// Author : Dean Shi
// Date   : 2019-01-10

/***************************************************************************************
 *
 * A binary tree is univalued if every node in the tree has the same value.
 *
 * Return true if and only if the given tree is univalued.
 *
 * Example 1:
 *
 * Input: [1,1,1,1,1,null,1]
 * Output: true
 *
 * Example 2:
 *
 * Input: [2,2,2,5,2]
 * Output: false
 *
 * Note:
 *
 * The number of nodes in the given tree will be in the range [1, 100].
 * Each node's value will be an integer in the range [0, 99].
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
var isUnivalTree = function(root) {
    const valSet = new Set([root.val])

    const stack = [root]
    while (stack.length) {
        const node = stack.pop()

        if (!valSet.has(node.val)) {
            return false
        }
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return true
};
