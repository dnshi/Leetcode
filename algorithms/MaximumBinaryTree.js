// Source : https://leetcode.com/problems/maximum-binary-tree
// Author : Dean Shi
// Date   : 2017-08-09

/***************************************************************************************
 *
 * Given an integer array with no duplicates. A maximum tree building on this array is
 * defined as follow:
 *
 * The root is the maximum number in the array.
 * The left subtree is the maximum tree constructed from left part subarray divided by
 * the maximum number.
 * The right subtree is the maximum tree constructed from right part subarray divided
 * by the maximum number.
 *
 * Construct the maximum tree by the given array and output the root node of this tree.
 *
 * Example 1:
 *
 * Input: [3,2,1,6,0,5]
 * Output: return the tree root node representing the following tree:
 *
 *       6
 *     /   \
 *    3     5
 *     \    /
 *      2  0
 *        \
 *         1
 *
 * Note:
 *
 * The size of the given array will be in the range [1,1000].
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums, left = 0, right = nums.length - 1) {
    if (left > right) return null

    let [max, index] = [nums[left], left]
    for (let i = left + 1; i <= right; ++i) {
        if (max < nums[i]) [max, index] = [nums[i], i]
    }
    const node = new TreeNode(max);
    [node.left, node.right] = [
        constructMaximumBinaryTree(nums, left, index - 1),
        constructMaximumBinaryTree(nums, index + 1, right)
    ]
    return node
};
