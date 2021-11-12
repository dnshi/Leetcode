// Source : https://leetcode.com/problems/serialize-and-deserialize-bst
// Author : Dean Shi
// Date   : 2021-11-12

/***************************************************************************************
 * Serialization is converting a data structure or object into a sequence of bits so
 * that it can be stored in a file or memory buffer, or transmitted across a network
 * connection link to be reconstructed later in the same or another computer
 * environment.
 * 
 * Design an algorithm to serialize and deserialize a binary search tree. There is no
 * restriction on how your serialization/deserialization algorithm should work. You
 * need to ensure that a binary search tree can be serialized to a string, and this
 * string can be deserialized to the original tree structure.
 * 
 * The encoded string should be as compact as possible.
 * 
 * Example 1:
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 * Example 2:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * 
 * The number of nodes in the tree is in the range [0, 104].
 * 0 <= Node.val <= 104
 * The input tree is guaranteed to be a binary search tree.
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return root
        ? `${root.val},${serialize(root.left)},${serialize(root.right)}`
        : 'null'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    return buildTreeNode(data.split(',').reverse())
};

function buildTreeNode(nodeList) {
    const nodeVal = nodeList.pop()
    let node = null
    if (nodeVal !== 'null') {
        node = new TreeNode(Number(nodeVal))
        node.left = buildTreeNode(nodeList)
        node.right = buildTreeNode(nodeList)
    }
    return node
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
