// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
// Author : Dean Shi
// Date   : 2017-03-19

/***************************************************************************************
 *
 * Given an array where elements are sorted in ascending order, convert it to a height
 * balanced BST.
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
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
    if (left > right) return null

    const mid = Math.floor((left + right) / 2)
    const node = new TreeNode(nums[mid])
    node.left = sortedArrayToBST(nums, left, mid - 1)
    node.right = sortedArrayToBST(nums, mid + 1, right)
    return node
};
