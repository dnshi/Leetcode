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
    var arr = [];
    var f = function(str, left, right) {
        if (left === n && right === n) {
            arr.push(str);
            return;
        }

        if (left !== n) {
            f(str + '(', left + 1, right);
        }
        if (left > right) {
            f(str + ')', left, right + 1);
        }
    };

    f('', 0, 0);
    return arr;
};

// Test case
console.log(generateParenthesis(3).toString() === '((())),(()()),(())(),()(()),()()()'); // true
