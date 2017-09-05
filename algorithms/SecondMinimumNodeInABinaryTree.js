// Source : https://leetcode.com/problems/second-minimum-node-in-a-binary-tree
// Author : Dean Shi
// Date   : 2017-09-05

/***************************************************************************************
 *
 * Given a non-empty special binary tree consisting of nodes with the non-negative
 * value, where each node in this tree has exactly two or zero sub-node. If the node
 * has two sub-nodes, then this node's value is the smaller value among its two
 * sub-nodes.
 *
 * Given such a binary tree, you need to output the second minimum value in the set
 * made of all the nodes' value in the whole tree.
 *
 * If no such second minimum value exists, output -1 instead.
 *
 * Example 1:
 *
 * Input:
 *     2
 *    / \
 *   2   5
 *      / \
 *     5   7
 *
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 * Example 2:
 *
 * Input:
 *     2
 *    / \
 *   2   2
 *
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest value.
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    const stack = []
    const mins = [root.val]
    let node = root

    do {
        if (node.left) {
            stack.push(node.right, node.left)
        }
        if (node.val === mins[0]) continue

        if (node.val < mins[0]) {
            [mins[0], mins[1]] = [node.val, mins[0]]
        } else if (node.val < (mins[1] || Number.MAX_SAFE_INTEGER)) {
            mins[1] = node.val
        }
    } while (node = stack.pop())

    return mins[1] || -1
};
