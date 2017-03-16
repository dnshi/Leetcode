// Source : https://leetcode.com/problems/reverse-string-ii
// Author : Dean Shi
// Date   : 2017-03-11

/***************************************************************************************
 *
 * Given a string and an integer k, you need to reverse the first k characters for
 * every 2k characters counting from the start of the string. If there are less than k
 * characters left, reverse all of them. If there are less than 2k but greater than or
 * equal to k characters, then reverse the first k characters and left the other as
 * original.
 *
 * Example:
 *
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 * Restrictions:
 *
 *  The string consists of lower English letters only.
 *  Length of the given string and k will in the range [1, 10000]
 *
 *
 *
 *           Subscribe to see which companies asked this question.
 *
 *
 *
 *
 *
 *           Show Tags
 *
 *
 *             String
 *
 *
 *
 *
 *
 *
 *
 *           Show Similar Problems
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    return s.length <= k
        ? s.split('').reverse().join('')
        : reverseStr(s.substring(0, k), k) + s.substring(k, 2 * k) + reverseStr(s.substring(2 * k), k)
};
