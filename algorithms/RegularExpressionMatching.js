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
    if (p.length === 0) {
        return !s.length
    }
    let firstLetterMatched = s.length > 0 && (s[0] === p[0] || p[0] === '.')
    
    if (p[1] === '*') {
        return isMatch(s, p.substring(2)) || (firstLetterMatched && isMatch(s.substring(1), p))
    }
    return firstLetterMatched && isMatch(s.substring(1), p.substring(1))
};
