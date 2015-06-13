// Source : https://oj.leetcode.com/problems/generate-parentheses/
// Author : Dean Shi
// Date   : 2015-06-12

/**********************************************************************************
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 *
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var strArr = [];

    bfs('', 0, 0);
    return strArr;

    // breadth-first search algorithm
    function bfs(str, left, right) {
        if (left === n && right === n) {
            strArr.push(str);
            return;
        }

        if (left !== n) {
            bfs(str + '(', left + 1, right);
        }
        if (left > right) {
            bfs(str + ')', left, right + 1);
        }
    }
};

// Test case
console.log(generateParenthesis(3).toString() === '((())),(()()),(())(),()(()),()()()'); // true
