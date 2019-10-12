// Source : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Date   : 2019-10-12

/**
 * Given a binary search tree, write a function kthSmallest to find the
 * kth smallest element in it. 
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 
Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (k == 0) {
    return root.val;
  }

  let count = 0;
  let kthElement = null;

  (function getKthElement(root) {
    if (!root) {
      return;
    }

    getKthElement(root.left);

    count++;
    if (count == k) {
      kthElement = root;
      return;
    }

    getKthElement(root.right);
  })(root);

  return kthElement ? kthElement.val : null;
};
