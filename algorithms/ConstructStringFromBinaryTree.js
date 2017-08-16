// Source : https://leetcode.com/problems/construct-string-from-binary-tree
// Author : Dean Shi
// Date   : 2017-08-15

/***************************************************************************************
 *
 * You need to construct a string consists of parenthesis and integers from a binary
 * tree with the preorder traversing way.
 *
 * The null node needs to be represented by empty parenthesis pair "()". And you need
 * to omit all the empty parenthesis pairs that don't affect the one-to-one mapping
 * relationship between the string and the original binary tree.
 *
 * Example 1:
 *
 * Input: Binary tree: [1,2,3,4]
 *        1
 *      /   \
 *     2     3
 *    /
 *   4
 *
 * Output: "1(2(4))(3)"
 * Explanation: Originallay it needs to be "1(2(4)())(3()())", but you need to omit all
 * the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)".
 *
 * Example 2:
 *
 * Input: Binary tree: [1,2,3,null,4]
 *        1
 *      /   \
 *     2     3
 *      \
 *       4
 *
 * Output: "1(2()(4))(3)"
 * Explanation: Almost the same as the first example, except we can't omit the first
 * parenthesis pair to break the one-to-one mapping relationship between the input and
 * the output.
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return ''

    const [curr, left, right] = [String(t.val), tree2str(t.left), tree2str(t.right)]

    if (!left && !right) return curr
    if (!left && right) return `${curr}()(${right})`
    if (left && !right) return `${curr}(${left})`

    return `${curr}(${left})(${right})`
};
