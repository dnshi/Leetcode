// Source : https://leetcode.com/problems/most-frequent-subtree-sum
// Author : Dean Shi
// Date   : 2017-03-10

/***************************************************************************************
 *
 * Given the root of a tree, you are asked to find the most frequent subtree sum. The
 * subtree sum of a node is defined as the sum of all the node values formed by the
 * subtree rooted at that node (including the node itself). So what is the most
 * frequent subtree sum value? If there is a tie, return all the values with the
 * highest frequency in any order.
 *
 * Examples 1
 * Input:
 *
 *   5
 *  /  \
 * 2   -3
 *
 * return [2, -3, 4], since all the values happen only once, return all of them in any
 * order.
 *
 * Examples 2
 * Input:
 *
 *   5
 *  /  \
 * 2   -5
 *
 * return [2], since 2 happens twice, however -5 only occur once.
 *
 * Note:
 * You may assume the sum of values in any subtree is in the range of 32-bit signed
 * integer.
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
var findFrequentTreeSum = function(root) {
    const map = new Map()
    const result = []
    let maxCount = 0

    helper(root, map)
    for (let [sum, count] of map) {
        if (count === maxCount) result.push(sum)
    }
    return result

    function helper(root, map) {
        let sum = 0
        if (root) {
            const leftSum = helper(root.left, map)
            const rightSum = helper(root.right, map)

            sum = root.val + leftSum + rightSum
            const count = (map.get(sum) || 0) + 1
            map.set(sum, count)
            maxCount = Math.max(maxCount, count)
        }
        return sum
    }
};

