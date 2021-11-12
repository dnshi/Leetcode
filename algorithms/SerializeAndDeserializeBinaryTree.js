// Source : https://leetcode.com/problems/serialize-and-deserialize-binary-tree
// Author : Dean Shi
// Date   : 2021-11-12

/***************************************************************************************
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or transmitted
 * across a network connection link to be reconstructed later in the same or another
 * computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work. You
 * just need to ensure that a binary tree can be serialized to a string and this string
 * can be deserialized to the original tree structure.
 * 
 * Clarification: The input/output format is the same as how LeetCode serializes a
 * binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.
 * 
 * Example 1:
 * 
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 * 
 * Example 2:
 * 
 * Input: root = []
 * Output: []
 * 
 * Example 3:
 * 
 * Input: root = [1]
 * Output: [1]
 * 
 * Example 4:
 * 
 * Input: root = [1,2]
 * Output: [1,2]
 * 
 * Constraints:
 * 
 * The number of nodes in the tree is in the range [0, 104].
 * -1000 <= Node.val <= 1000
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
    if (root) {
        return `${root.val},${serialize(root.left)},${serialize(root.right)}`
    }
    return 'null'
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
