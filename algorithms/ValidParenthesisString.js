// Source : https://leetcode.com/problems/valid-parenthesis-string
// Author : Dean Shi
// Date   : 2017-09-25

/***************************************************************************************
 * 
 * Given a string containing only three types of characters: '(', ')' and '*', write a
 * function to check whether this string is valid. We define the validity of a string
 * by these rules:
 * 
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '
 * (' or an empty string.
 * An empty string is also valid.
 * 
 * Example 1:
 * Input: "()"
 * Output: True
 * 
 * Example 2:
 * Input: "(*)"
 * Output: True
 * 
 * Example 3:
 * Input: "(*))"
 * Output: True
 * 
 * Note:
 * 
 * The string size will be in the range [1, 100].
 * 
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let a = 0, b = 0

    for (const c of s) {
        /**
         * a - count * as )
         * b - count * as (
         */
        a += c === '(' ? 1 : -1
        b += c !== ')' ? 1 : -1

        // If b is less than 0, that means ) is more
        // than sum of ( and *
        if (b < 0) return false

        // If a is less than 0, that means * should
        // not be counted as )
        a = Math.max(a, 0)
    }

    return a === 0
};
