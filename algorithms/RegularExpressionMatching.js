// Source : https://oj.leetcode.com/problems/regular-expression-matching/
// Author : Dean Shi
// Date   : 2015-06-03

/**********************************************************************************
 *
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var result = s.match(RegExp(p));
    return result ? result[0] === s : false;
};

// Test cases
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'aa')); // true
console.log(isMatch('aaa', 'aa')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('aa', '.*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
