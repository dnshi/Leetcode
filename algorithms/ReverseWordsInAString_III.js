// Source : https://leetcode.com/problems/reverse-words-in-a-string-iii
// Author : Dean Shi
// Date   : 2017-04-09

/***************************************************************************************
 *
 * Given a string, you need to reverse the order of characters in each word within a
 * sentence while still preserving whitespace and initial word order.
 *
 * Example 1:
 *
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Note:
 * In the string, each word is separated by single space and there will not be any
 * extra space in the string.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ')
};
